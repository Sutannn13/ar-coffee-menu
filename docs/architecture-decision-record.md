# Architecture Decision Record

## ADR 001: Keep the WebAR Demo as a Static Browser Application

Status: accepted

## Context

The repository contains a small WebAR application made from `index.html`, `ar.html`, `style.css`, and `script.js`. There is no package manager configuration, backend, build step, or server-side framework in the current project.

The AR scene already uses A-Frame and AR.js from CDN scripts in `ar.html`.

## Decision

Keep the application as a static browser application for this scope. Implement the coffee cup visual fix using existing A-Frame primitives and existing JavaScript DOM updates.

## Rationale

- The requested change is visual and localized to the AR marker object.
- A static structure is simpler for classroom demo and GitHub Pages or Netlify deployment.
- Adding a build system or 3D asset pipeline would increase setup cost without being required for the current fix.
- Existing controls already work through plain JavaScript and can be preserved.

## Consequences

- Validation remains mostly manual for marker tracking, camera permission, and device performance.
- Static syntax checks can catch JavaScript errors, but not full AR tracking behavior.
- Future high-fidelity cup models could use `.glb` assets, but that is outside the current minimal patch.

## Boundaries

- `ar.html` owns scene markup and primitive geometry.
- `script.js` owns menu state and interactive behavior.
- `style.css` owns HUD and landing page styling.
- No backend, database, API, or persistence layer is involved.
