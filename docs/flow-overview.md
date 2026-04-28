# Flow Overview

## Primary User Flow

1. User opens `index.html`.
2. User selects the AR entry action.
3. Browser loads `ar.html`.
4. A-Frame and AR.js request camera access.
5. User points the camera at the Hiro marker.
6. AR.js emits marker found or marker lost events.
7. The coffee cup group appears above the marker.
8. User can rotate the object, switch menu item, or toggle the information card.

## Runtime Flow

- `ar.html` defines the marker, 3D object group, text labels, camera entity, HUD, and controls.
- `script.js` initializes after `DOMContentLoaded`.
- `updateMenuDisplay()` syncs HUD text and 3D labels.
- `updateCoffeeModel()` applies menu-specific colors and cup transform values.
- `setupMarkerEvents()` updates the marker status UI.
- `setupButtonEvents()` wires Rotate, Next, and Info buttons.

## AR Object Contract

- The 3D cup should stay visually centered above the Hiro marker.
- The group scale should stay small, around `0.45 0.45 0.45`.
- The cup should use a slight tilt so the side silhouette, rim, coffee surface, handle, saucer, and steam are visible.
- Menu switching may change colors and labels but must not inflate the object back to the previous large scale.

## Manual Test Matrix

- Marker not visible: status says searching and marker hint is visible.
- Marker visible: status says detected and marker hint is hidden.
- Rotate button: cup spins while preserving side-view tilt.
- Next button: HUD text and 3D labels update; object remains small.
- Info button: info card toggles without affecting the AR object.
