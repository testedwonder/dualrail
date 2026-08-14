import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { VerificationBadge, type VerificationScope } from './VerificationBadge'

const cases: Array<[VerificationScope, string, string[]]> = [
  ['application', 'Application verification', ['43', '27', '66']],
  ['research', 'Research registry verification', ['24']],
  ['lab', 'Dual-rail Lab verification', ['1440×836']],
]

describe('VerificationBadge', () => {
  it.each(cases)('opens the %s digest with counts and closes with Escape', async (scope, title, metrics) => {
    const user = userEvent.setup()
    render(<VerificationBadge scope={scope} />)
    await user.click(screen.getByRole('button', { name: `View ${title.toLocaleLowerCase()}` }))
    expect(screen.getByRole('dialog', { name: title })).toBeInTheDocument()
    for (const metric of metrics) expect(screen.getByText(metric)).toBeInTheDocument()
    expect(screen.getByText(/Boundary:/)).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: title })).not.toBeInTheDocument()
  })
})