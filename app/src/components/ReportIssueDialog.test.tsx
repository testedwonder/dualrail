import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ReportIssueDialog } from './ReportIssueDialog'

describe('ReportIssueDialog', () => {
  it('discloses the public report boundary and closes with Escape', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ReportIssueDialog open onClose={onClose} />)

    expect(screen.getByRole('dialog', { name: 'Report a bug' })).toBeInTheDocument()
    expect(screen.getByText(/One primary maintainer/)).toBeInTheDocument()
    expect(screen.getByText(/does not create one automatically/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Security policy/ })).toHaveAttribute('href', expect.stringContaining('/security/policy'))
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('shows only configured support destinations after the report starts', async () => {
    const user = userEvent.setup()
    render(
      <ReportIssueDialog
        open
        onClose={vi.fn()}
        authorName="Example Author"
        portfolioUrl="https://example.com/portfolio"
        supportLinks={[{ label: 'Patreon', url: 'https://example.com/support' }]}
      />,
    )

    await user.click(screen.getByRole('link', { name: /Open GitHub bug report/ }))
    expect(screen.getByText(/Thank you for improving/)).toHaveTextContent('Example Author')
    expect(screen.getByRole('link', { name: /Portfolio/ })).toHaveAttribute('href', 'https://example.com/portfolio')
    expect(screen.getByRole('link', { name: /Patreon/ })).toHaveAttribute('href', 'https://example.com/support')
  })
})