/**
 * @jest-environment jsdom
 */

import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { render } from '@testing-library/react'
import Stepper from '../components/Stepper'

describe('Stepper component', () => {

  it('should render button', () => {
    render(<Stepper/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should have correct text content on button', () => {
    render(<Stepper/>)
    expect(screen.getByRole('button')).toHaveTextContent("Game")
  })
  
  it('should update step-count and button content on click', async () => {
    render(<Stepper/>)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => expect( screen.getByRole('button') ).toHaveTextContent("End") )
  })
  
  it('should remove button when step count is higher than amount of steps', async () => {
    render(<Stepper/>)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    await waitFor(() => expect(button).toHaveTextContent("End") )
    fireEvent.click(button)
    await waitFor(() => expect(button).not.toBeInTheDocument() )
  })

})