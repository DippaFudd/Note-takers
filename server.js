const express = require('express');  // Importing the Express module to create the app.
const path = require('path');  // Importing the 'path' module to handle file paths.
const htmlRoutes = require('./routes/htmlRoutes');  // Importing the routes for serving HTML pages.
const apiRoutes = require('./routes/apiRoutes');  // Importing the routes for handling API requests.

const app = express();  // Creating an instance of the Express app.
const PORT = process.env.PORT || 3000;  // Defining the port on which the server will listen, defaulting to 3001.

// Middleware to parse incoming request bodies as JSON (for API requests).
app.use(express.json());
// Middleware to parse incoming request bodies as URL-encoded data (for form submissions, etc.).
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files (e.g., images, CSS, JavaScript) from the 'public' directory.
app.use(express.static('public'));

// Setting up routes for handling HTML-related requests.
app.use('/', htmlRoutes);  // Routes to handle requests for HTML pages (such as index.html, notes.html, etc.)
// Setting up routes for handling API-related requests (e.g., GET, POST, DELETE).
app.use('/api', apiRoutes);

// Catch-all route handler for all other requests.
// If no route matches, it sends back the 'index.html' file from the public folder.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Starting the server and listening on the specified PORT.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  // Logs the message to the console when the server starts.
});
