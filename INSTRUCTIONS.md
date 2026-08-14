# Release Instructions

The repository now builds a version `0.1.0` offline-first website that can be installed from Android, iOS, iPadOS, and desktop browsers. CI, path-safe output, service-worker generation, release verification, and a manual GitHub Pages workflow are automated.

## Owner Actions

1. Change the repository visibility to **Public** after the sanitized `main` branch is pushed.
2. Open **Settings → Security → Code security and analysis**. Under **Advanced Security**, enable **Private vulnerability reporting**. GitHub exposes this option only for public repositories.
3. Open **Settings → Pages**. Under **Build and deployment**, select **GitHub Actions** as the source. This control may be unavailable for a private repository on the current plan.
4. Open **Actions → Deploy website → Run workflow**. The default URL will be `https://testedwonder.github.io/dualrail/`.
5. Verify Library, Settings export, author/support links, the report flow, offline reload, and Lab on one desktop browser and one phone.
6. After the deployment check passes, create the `v0.1.0` tag and GitHub release.

The public author and support destinations are built-in release metadata. The configured Codespaces secrets can override local environments, but the Pages workflow does not depend on secrets. `VITE_BASE_PATH` is fixed to `/dualrail/` in the deployment workflow.

## Install On Mobile

- **Android/Chrome:** open the deployed site, open the browser menu, and choose **Install app** or **Add to Home screen**.
- **iPhone or iPad/Safari:** open the deployed site, choose **Share**, then **Add to Home Screen**.

The installed app caches the public application for offline study. Notes and ratings remain local to that browser profile; use Settings export/import to move them between devices.

## Custom Domain

The first release does not need a purchased domain. For a custom domain, configure the DNS records GitHub displays, add the domain under **Settings → Pages**, and change `VITE_BASE_PATH` in the Pages workflow from `/dualrail/` to `/`.

## No Database Yet

A database is not required for this release. Adding cross-device accounts would introduce authentication, privacy, deletion, breach-response, and operating-cost obligations. Keep JSON portability as the release behavior until those requirements are accepted explicitly.