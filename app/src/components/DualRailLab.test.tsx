import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { DualRailLab } from './DualRailLab'

describe('DualRailLab', () => {
  it('shows a balanced normalized state by default', () => {
    render(<DualRailLab onNavigate={vi.fn()} />)
    expect(screen.getByText('α = 0.707')).toBeInTheDocument()
    expect(screen.getByText('β = 0.707 + 0.000i')).toBeInTheDocument()
    expect(screen.getByText('1.000')).toBeInTheDocument()
  })

  it('updates rail populations and relative phase from controls', () => {
    render(<DualRailLab onNavigate={vi.fn()} />)
    fireEvent.change(screen.getByRole('slider', { name: 'Population angle' }), { target: { value: '0' } })
    expect(screen.getByText('α = 1.000')).toBeInTheDocument()
    expect(screen.getByText('β = 0.000 + 0.000i')).toBeInTheDocument()
    fireEvent.change(screen.getByRole('slider', { name: 'Population angle' }), { target: { value: '90' } })
    fireEvent.change(screen.getByRole('slider', { name: 'Relative phase' }), { target: { value: '90' } })
    expect(screen.getByText('β = 0.000 + 0.707i')).toBeInTheDocument()
  })

  it('applies presets, resets, and opens canonical explanations', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<DualRailLab onNavigate={onNavigate} />)
    await user.click(screen.getByRole('button', { name: '|0,1>' }))
    expect(screen.getByText('α = 0.000')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByText('α = 0.707')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'State notation' }))
    expect(onNavigate).toHaveBeenCalledWith(expect.stringContaining('quantum-state-and-fock-notation.md'))
  })
})