/**
 * @jest-environment jsdom
 */

import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { render } from '@testing-library/react'
import ColorPicker from '../components/ColorPicker'

const listOfColors = ["red", "green", "blue"];

describe('ColorPicker', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a list of all colors passed to it', () => {
    render(<ColorPicker colors={listOfColors} selectedColor="" handleSelectedColor={()=>{}} />)
    const buttons = screen.getAllByRole('button')
    expect( buttons.length ).toBe( listOfColors.length )
  })

  it('should have disabled button if color does not match', () => {
    render(<ColorPicker colors={listOfColors} selectedColor="purple" handleSelectedColor={()=>{}} />)
    const buttons = screen.getAllByRole('button')
    const disabledButtons = buttons.filter( button => button.disabled )    
    expect( disabledButtons.length ).toBe( listOfColors.length ) // No match, expect all buttons to be disabled
  })

  it('should have one active button if color match', () => {
    render(<ColorPicker colors={listOfColors} selectedColor="red" handleSelectedColor={()=>{}} />)
    const buttons = screen.getAllByRole('button')
    const activeButtons = buttons.filter( button => !button.disabled )
    expect( activeButtons.length ).toBe( 1 )
  })

  it('should have called onClick on button', async () => {
    const handleClick = jest.fn()
    render(<ColorPicker colors={listOfColors} selectedColor="" handleSelectedColor={handleClick} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click( buttons[0] ) // Click on active button
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1) )
  })
  
  it('should not have called onClick on disabled button', async () => {
    const handleClick = jest.fn()
    render(<ColorPicker colors={listOfColors} selectedColor="red" handleSelectedColor={handleClick} />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click( buttons[1] ) // Click on disabled button
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(0) )
  })

  it('should updated selectedColor and active buttons on click', async () => {
    var selectedColor = ""
    const {rerender} = render(<ColorPicker colors={listOfColors} selectedColor={selectedColor} handleSelectedColor={ (color) => { selectedColor = color } } />)
    const buttons = screen.getAllByRole("button")
    fireEvent.click( buttons[0] )
    rerender(<ColorPicker colors={listOfColors} selectedColor={selectedColor} handleSelectedColor={ (color) => { selectedColor = color } } />)
    await waitFor(() => expect( selectedColor ).toBe( "red" ))
    await waitFor(() => expect( buttons[0] ).toBeEnabled())
    await waitFor(() => expect( buttons[1] ).toBeDisabled())
    await waitFor(() => expect( buttons[2] ).toBeDisabled())
  })

})