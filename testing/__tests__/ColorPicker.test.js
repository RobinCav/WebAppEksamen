/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import ColorPicker from '../components/ColorPicker'

describe('ColorPicker', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a list of all colors passed to it', () => {
    render(<ColorPicker colors={["red", "green", "blue"]} selectedColor="" handleSelectedColor={()=>{}} />)
    var colorpicker = document.querySelector("ul")
    expect(colorpicker.childElementCount).toBe(3)
  })
  
  it('should have disabled button if color does not match', () => {
    render(<ColorPicker colors={["red", "green", "blue"]} selectedColor="green" handleSelectedColor={()=>{}} />)
    var buttons = document.getElementsByTagName("button")
    expect( buttons[0].disabled ).toBe( true )
  })

  it('should have one active button if color match', () => {
    render(<ColorPicker colors={["red", "green", "blue"]} selectedColor="red" handleSelectedColor={()=>{}} />)
    var buttons = document.getElementsByTagName("button")
    var active = 0;
    for ( var i = 0; i < buttons.length; i++ ) {
      if ( buttons[i].disabled == false ) {
        active++;
      }
    }
    expect( active ).toBe( 1 )
  })

  it('should have called onClick on button', async () => {
    const handleClick = jest.fn()
    render(<ColorPicker colors={["red", "green", "blue"]} selectedColor="" handleSelectedColor={handleClick} />)
    var buttons = document.getElementsByTagName("button")
    fireEvent.click( buttons[0] )
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it('should not have called onClick on disabled button', async () => {
    const handleClick = jest.fn()
    render(<ColorPicker colors={["red", "green", "blue"]} selectedColor="red" handleSelectedColor={handleClick} />)
    var buttons = document.getElementsByTagName("button")
    fireEvent.click( buttons[1] ) // Klikker på en knapp som er disabled
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  
  it('should updated selectedColor and active buttons on click', async () => {
    var selectedColor = "";
    render(<ColorPicker colors={["red", "green", "blue"]} selectedColor={selectedColor} handleSelectedColor={ (color) => selectedColor = color } />)
    var buttons = document.getElementsByTagName("button")
    fireEvent.click( buttons[2] )
    expect( selectedColor ).toBe("blue")
  })

})