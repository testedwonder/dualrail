# Privacy

Dualrail Atlas version `0.1.0` is an offline-first static application. It has no account system, analytics, advertising, server-side database, or paid API dependency by default.

## Data Stored Locally

The browser stores understanding ratings, personal notes, and research proposals in local storage. The service worker caches public application files for offline use. This data remains in the current browser profile until the user exports it, clears site data, resets it from Settings, or removes the application.

Exports are JSON files controlled by the user. They can contain personal notes and should be handled accordingly.

## External Destinations

Network requests to third parties occur only when the user deliberately opens an external research source, portfolio, support destination, or GitHub report form. Those destinations apply their own privacy policies.

GitHub issues are public. The report flow warns users not to include private notes, credentials, contact details, or undisclosed vulnerabilities.

## Payments And Funding

The application does not collect payment credentials. Optional support links are ordinary external links and appear only after verified public destinations are configured. Support never unlocks content or changes source ranking or issue priority.

## Removing Data

Use **Settings → Reset study data** to remove ratings and notes. Remove research proposals from the Research view. Browser site-data controls can remove all local storage and offline caches for the site.

Security reports follow [SECURITY.md](SECURITY.md). Material changes to collection or storage require this document and the release review to be updated before deployment.