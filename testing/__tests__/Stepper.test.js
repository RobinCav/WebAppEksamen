/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import Stepper from '../components/Stepper'

describe('Stepper component', () => {

  it('should render button', () => {
    render(<Stepper/>)
    const button = document.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  it('should have correct text content on button', () => {
    render(<Stepper/>)
    const button = document.querySelector('button')
    expect(button).toHaveTextContent("Game")
  })
  
  it('should update step-count and button content on click', async () => {
    render(<Stepper/>)
    const button = document.querySelector('button')
    expect( button ).toHaveTextContent("Game")
    fireEvent.click(screen.getByText('Game'))
    expect( button ).toHaveTextContent("End")
  })
  
  it('should remove button when step count is higher than amount of steps', async () => {
    render(<Stepper/>)
    var button = screen.getByRole("button",{type:/button/i})
    for ( var i = 0; i < 2; i++ )
      fireEvent.click(button)
    expect( button ).not.toBeInTheDocument()
  })

})
