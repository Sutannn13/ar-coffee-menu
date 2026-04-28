# Project Brief

## Product

Tugas VAR is a static WebAR coffee menu demo. Users open the landing page, enter AR mode, allow camera access, and scan the Hiro marker to see a small 3D coffee cup with menu details.

## Confirmed Repository Evidence

- `index.html` is the landing page.
- `ar.html` contains the A-Frame and AR.js marker scene.
- `script.js` controls marker status, menu switching, rotation, and info visibility.
- `style.css` contains the landing and AR HUD styling.
- No package manifest is present; the app relies on browser-native HTML, CSS, JavaScript, and CDN-loaded A-Frame/AR.js.

## Current Feature Scope

The current task is a narrow WebAR visual fix: make the marker object read as a small coffee cup instead of a large brown circle while preserving Rotate, Next, and Info controls.

## Users and Context

The primary user is a student or demo participant using a mobile browser. The experience should be quick to understand, tolerate handheld camera movement, and keep the 3D object small enough to remain anchored above the marker.

## Constraints

- Preserve the static project shape.
- Do not add new runtime dependencies.
- Keep AR interactions in `ar.html` and `script.js`.
- Manual camera validation with the Hiro marker is still required because marker tracking depends on device camera, lighting, and browser permissions.

## Assumptions to Validate

- The CDN scripts remain reachable in the target demo environment.
- The Hiro marker is printed or displayed with enough contrast.
- The target device supports WebGL and camera access.

## Next Validation Action

Open `ar.html` through a local web server or HTTPS deployment, scan the Hiro marker, and verify that the cup remains small, upright on the marker, and responsive to Rotate, Next, and Info controls.
