# Design Intent

## Design Vision and Product Personality

AR Coffee Menu should feel like a small cafe object placed onto the physical marker, not a large abstract 3D demo. The product personality is tactile, warm, and spatially clear.

## Audience and Use-Context Signals

Users are likely testing from a phone, with one hand holding the camera and the other interacting with controls. The scene must favor quick recognition over fine detail.

## Visual Direction and Distinctive Moves

The current design anchor is a hand-thrown ceramic demitasse on a cafe saucer. The cup silhouette should be readable from a shallow side angle: tapered body, visible rim, dark coffee surface, side handle, low saucer, and faint steam.

## Color Science and Semantic Roles

The palette should stay coffee-derived: roasted browns for liquid depth, warmer ceramic browns for the cup body, lighter tan for rim and saucer, and soft white transparency for steam. Status green remains reserved for marker detection.

## Typographic Engineering and Hierarchy

HUD text stays compact because the camera view is the primary surface. AR labels should be short, centered, and secondary to the cup shape.

## Spacing, Layout Rhythm, and Density Strategy

The AR object must stay small relative to the Hiro marker. Controls remain grouped at the bottom of the viewport and should not block the marker target area more than necessary.

## Token Architecture and Alias Strategy

This project does not use a token build system. Existing CSS custom properties in `style.css` are the practical token layer for HUD surfaces. AR object colors are direct A-Frame attributes because they are primitive material values.

## Responsive Strategy and Cross-Viewport Adaptation Matrix

- Mobile: prioritize camera view, marker hint, and bottom controls.
- Tablet: preserve the same AR interaction but allow the HUD to breathe with available width.
- Desktop: keep the same static demo behavior for webcam testing.

## Motion and Interaction Principles

Motion should clarify spatial presence. Rotation spins around the marker while preserving a slight cup tilt. Steam uses slow, low-opacity motion so it reads as heat without distracting from marker tracking.

## Component Language and Morphology

The AR cup is built from simple primitives: tapered cylinder body, torus rim, thin coffee surface, torus handle, saucer cylinder, and translucent steam arcs. HUD controls preserve their existing button morphology and states.

## Context Hygiene and Source Boundaries

Design decisions come from the current repository, the WebAR coffee menu brief, and the requested bug fix. No external visual benchmark or new UI library is introduced.

## Accessibility Non-Negotiables

Controls need visible text labels and existing `aria-label` attributes. The UI must remain operable without relying on color alone; marker status uses both text and a dot.

## Anti-Patterns to Avoid

- Oversized marker object that fills the camera view.
- Flat top disk that reads as a brown circle.
- Rotation that removes the intentional side-view tilt.
- Decorative steam or labels that obscure cup recognition.
- New dependency or asset pipeline for a primitive-only fix.

## Implementation Notes for Future UI Tasks

If higher realism is required later, add a lightweight `.glb` cup model under `assets/models/` and document the asset source. For the current scope, A-Frame primitives are sufficient and easier to validate in a static classroom demo.
