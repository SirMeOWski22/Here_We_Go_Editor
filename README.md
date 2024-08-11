# Here We Go Editor
Here We Go Editor is a Progressive Web Application (PWA) that functions as a text editor, allowing users to create and edit text files with offline support. This project uses modern web technologies including Webpack, Workbox, and service workers to provide a seamless offline experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- **Offline Support:** Users can create, edit, and save text files even when offline, thanks to service workers.
- **PWA Capabilities:** The app can be installed on devices as a standalone application.
- **Simple and Intuitive UI:** Designed for ease of use with a minimalist interface.
- **Data Persistence:** Uses IndexedDB to store data locally.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/Here_We_Go_Editor.git
   cd Here_We_Go_Editor

2. **Install Dependencies:**

  - Install root dependencies:
    ```bash
    npm install

  - Install client dependencies:
    ```bash
    cd client
    npm install
    
  - Install server dependencies:
    ```bash
    cd ../server
    npm install

## Usage
To run the application locally, use the following commands:

1. Build the client:
   From the root directory, run:
   ```bash
   npm run build
This will compile the client-side assets and place them in the dist directory.

2. Start the application:
   To start both the server and the client in development mode:
   ```bash
   npm run start:dev
The application will be accessible at http://localhost:3000 in your web browser.

## Deployment
The application can be deployed on platforms like Render.

## Technologies Used
Frontend:
 - HTML, CSS
 - JavaScript (ES6+)
 - Webpack
 - Babel
 - IndexedDB
Backend:
 - Node.js
 - Express.js
 - PWA Features:
PWA Features:
 - Workbox for service workers and caching strategies
 - WebpackPwaManifest for generating the PWA manifest

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch-name).
3. Make and commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch-name).
5. Open a pull request.

### Thanks To
- Many websites with useful tips
- YouTube videos that helped with debugging
- And ME because I didn't quit!
