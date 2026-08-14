# Security Policy

## Supported Release

Version `0.1.x` receives security fixes while it is the current public release.

## Private Reporting

Use GitHub's **Security → Report a vulnerability** flow for undisclosed security issues. Do not include exploit details, credentials, private notes, or personal information in a public issue.

If private vulnerability reporting is unavailable, open a public issue containing only the statement that a private contact path is needed. Do not disclose the vulnerability until the maintainer provides that path.

The project currently has one primary maintainer and no guaranteed response time or bug-bounty program. Reports are assessed by impact and reproducibility, not by funding status.

## Public Bugs

Normal product defects belong in the structured [GitHub bug report](https://github.com/testedwonder/dualrail/issues/new?template=bug-report.yml). A report does not automatically create a pull request; fixes require reproduction, review, and passing release gates.

## Release Controls

- Dependencies must pass `npm audit --audit-level=low`.
- CI, TypeScript, app tests, Python tests, knowledge validation, and release-output verification must pass.
- No secret belongs in `VITE_*`; Vite variables are embedded in public JavaScript.
- The static app must remain functional without support links or external APIs.
- Public release history must contain only the reviewed public snapshot.