import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ExerciseLab } from './ExerciseLab'

function renderExercise(exerciseId: string) {
  const onNavigate = vi.fn()
  render(<ExerciseLab exerciseId={exerciseId} documentId="knowledge/current.md" onNavigate={onNavigate} />)
  return { user: userEvent.setup(), onNavigate }
}

describe('interactive foundation exercises', () => {
  it('gives correct and incorrect diagnostic feedback and routes a miss', async () => {
    const { user, onNavigate } = renderExercise('foundations-diagnostic')
    await user.click(screen.getByRole('button', { name: 'The amplitude' }))
    expect(screen.getByText(/Not yet/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open review' }))
    expect(onNavigate).toHaveBeenCalledWith(expect.stringContaining('quantum-measurement-and-born-rule.md'))

    await user.click(screen.getByRole('button', { name: 'The amplitude magnitude squared' }))
    expect(screen.getByText(/Correct/)).toBeInTheDocument()
  })

  it('supports keyboard answers and reset', async () => {
    const { user } = renderExercise('foundations-diagnostic')
    const answer = screen.getByRole('button', { name: 'Av = lambda v' })
    answer.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByText(/Correct/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.queryByText(/Correct/)).not.toBeInTheDocument()
  })

  it('checks magnitude predictions and restores defaults', async () => {
    const { user } = renderExercise('complex-phase')
    await user.type(screen.getByRole('textbox', { name: 'Magnitude prediction' }), '5')
    await user.click(screen.getByRole('button', { name: 'Check' }))
    expect(screen.getByText(/Correct: \|z\| = 5.00/)).toBeInTheDocument()
    await user.clear(screen.getByRole('spinbutton', { name: 'Real component' }))
    await user.type(screen.getByRole('spinbutton', { name: 'Real component' }), '0')
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByRole('spinbutton', { name: 'Real component' })).toHaveValue(3)
  })

  it('distinguishes eigenvectors with immediate feedback', async () => {
    const { user } = renderExercise('matrix-eigenvector')
    await user.click(screen.getByRole('button', { name: 'Not an eigenvector' }))
    await user.click(screen.getByRole('button', { name: 'Check direction' }))
    expect(screen.getByText(/Compare component ratios/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Eigenvector' }))
    await user.click(screen.getByRole('button', { name: 'Check direction' }))
    expect(screen.getByText(/Av = 2v/)).toBeInTheDocument()
  })

  it('reproduces measurement counts and repairs calibration order', async () => {
    const { user } = renderExercise('measurement-lab')
    const first = screen.getByRole('status').textContent
    await user.click(screen.getByRole('button', { name: 'Run sample' }))
    expect(screen.getByRole('status').textContent).toBe(first)

    const ordering = renderExercise('gate-calibration-order')
    await ordering.user.click(screen.getByRole('button', { name: 'Check sequence' }))
    expect(screen.getByText(/Not yet/)).toBeInTheDocument()
    await ordering.user.click(screen.getByRole('button', { name: 'Move Fit a candidate setting up' }))
    await ordering.user.click(screen.getByRole('button', { name: 'Check sequence' }))
    expect(screen.getByText(/Fit precedes independent validation/)).toBeInTheDocument()
  })
})