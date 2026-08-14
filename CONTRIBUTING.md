# Contributing

Dualrail Atlas currently has one primary maintainer. Contributions are welcome, but review and response times are not guaranteed.

## Report First

Use the structured [bug report](https://github.com/testedwonder/dualrail/issues/new?template=bug-report.yml) for reproducible product defects. Use the Research proposal queue for source or content corrections. Follow [SECURITY.md](SECURITY.md) for vulnerabilities.

Submitting a report does not automatically create a pull request. A reviewed issue may be fixed by the maintainer or by a contributor through a separate pull request.

## Local Checks

```powershell
python -B -m unittest discover -s tests -v
python -B tools/update_complexity.py --check
python -B tools/validate_knowledge.py
npm --prefix app run release:check
git diff --check
```

Keep changes focused. Do not add credentials, personal documents, or paid runtime requirements. Canonical technical claims need explicit public sources and evidence boundaries. Personal notes and ratings must remain separate from canonical content.

Funding is voluntary and never changes review priority, source credibility, or access to the free application.