export interface SupportLink {
  label: string
  url: string
}

const fallbackRepositoryUrl = 'https://github.com/testedwonder/dualrail'
const fallbackAuthorName = 'Vi Connelly'
const fallbackPortfolioUrl = 'https://www.linkedin.com/in/vi-connelly/'
const fallbackSupportLinks = {
  Patreon: 'https://www.patreon.com/c/ViConnelly',
  PayPal: 'https://paypal.me/LConnelly898',
  Venmo: 'https://account.venmo.com/u/ltconnelly314',
} as const

function publicHttpsUrl(value: string | undefined) {
  const candidate = value?.trim()
  if (!candidate) return null
  try {
    const url = new URL(candidate)
    return url.protocol === 'https:' ? url.toString().replace(/\/$/, '') : null
  } catch {
    return null
  }
}

export const repositoryUrl = publicHttpsUrl(import.meta.env.VITE_GITHUB_REPOSITORY_URL) ?? fallbackRepositoryUrl
export const bugReportUrl = `${repositoryUrl}/issues/new?template=bug-report.yml`
export const securityPolicyUrl = `${repositoryUrl}/security/policy`
export const authorName = import.meta.env.VITE_AUTHOR_NAME?.trim() || fallbackAuthorName
export const portfolioUrl = publicHttpsUrl(import.meta.env.VITE_LINKEDIN_URL)
  ?? publicHttpsUrl(import.meta.env.VITE_PORTFOLIO_URL)
  ?? fallbackPortfolioUrl
export const supportLinks: SupportLink[] = [
  ['Patreon', import.meta.env.VITE_PATREON_URL, fallbackSupportLinks.Patreon],
  ['PayPal', import.meta.env.VITE_PAYPAL_URL, fallbackSupportLinks.PayPal],
  ['Venmo', import.meta.env.VITE_VENMO_URL, fallbackSupportLinks.Venmo],
].flatMap(([label, value, fallback]) => {
  const url = publicHttpsUrl(value) ?? fallback
  return url ? [{ label, url }] : []
})