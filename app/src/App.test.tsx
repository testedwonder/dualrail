import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { PERSONAL_STORAGE_KEY } from './lib/knowledge'

const defaultDocumentId = 'knowledge/topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md'

describe('Dualrail Atlas', () => {
  beforeEach(() => {
    localStorage.clear()
    window.history.replaceState({}, '', '/')
  })

  it('opens the default source-backed study document', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Quantum States and Fock Notation' })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: 'Knowledge library' })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: 'Personal study panel' })).toBeInTheDocument()
  })

  it('persists understanding and personal notes outside the knowledge files', async () => {
    const user = userEvent.setup()
    render(<App />)

    const rating = screen.getByRole('spinbutton', { name: 'Understanding rating' })
    await user.clear(rating)
    await user.type(rating, '7')
    const notes = screen.getByRole('textbox', { name: /Personal notes for Quantum States/ })
    await user.type(notes, 'Review phase conventions.')

    await waitFor(() => {
      const saved = JSON.parse(localStorage.getItem(PERSONAL_STORAGE_KEY) ?? '{}')
      expect(saved.entries[defaultDocumentId]).toMatchObject({
        understanding: 7,
        notes: 'Review phase conventions.',
      })
    })
  })

  it('filters the real corpus and opens the progress dashboard', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByRole('searchbox', { name: 'Search knowledge' }), 'no-such-dualrail-topic-xyz')
    expect(await screen.findByText('No matching documents')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Progress' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Understanding' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Progress summary' })).toBeInTheDocument()
  })
})