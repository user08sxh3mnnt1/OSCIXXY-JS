# OSCIXXY-JS

OSCIXXY-JS is a simple JavaScript library that allows users to create audiovisual art by drawing on an HTML canvas. The code provides a minimalistic web interface where users can draw lines on a canvas, and the corresponding drawing is translated into audio output.

## Features

- **Drawing Interface:** The web page provides a canvas where users can draw using their mouse. The drawing is captured in real-time, allowing for dynamic and interactive artwork creation.

- **Tracing Image Support:** Users can upload an image as a reference for tracing. The tracing image is displayed on a separate canvas, and users can choose to enable or disable it during the drawing process.

- **Audio Output:** The drawn lines are converted into audio output. Each drawn line corresponds to a unique sound, creating a multi-sensory experience.

- **Clear Canvas:** Users can clear the canvas to start a new drawing. This action resets both the visual canvas and the associated audio data.

## How it Works

1. **Drawing:** Users initiate drawing by clicking and dragging the mouse on the canvas. The x and y coordinates of the drawn path are recorded.

2. **Audio Data Accumulation:** As the user draws, the x and y coordinates are transformed and accumulated to create audio data.

3. **Tracing Image:** Optionally, users can upload a tracing image, which is displayed on a separate canvas. The tracing image serves as a guide for drawing.

4. **Real-time Update:** The drawn path is displayed on the visual canvas in real-time. If a tracing image is enabled, the path is overlaid on top of it.

5. **Audio Playback:** After drawing, the accumulated audio data is played back, providing an auditory representation of the drawn artwork.

## Usage

1. Open the HTML file in a web browser.

2. Draw on the canvas using the mouse.

3. Optionally, upload a tracing image using the provided input element.

4. Toggle the "Enable Tracing Image" checkbox to show/hide the tracing image.

5. Click the "Clear Canvas" button to start a new drawing.

6. Audio output will be generated based on the drawn path when drawing is complete.
