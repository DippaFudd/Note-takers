const path = require('path');  // Importing 'path' module to handle file paths.
const express = require('express');  // Importing 'express' module to create the Express app.
const router = express.Router();  // Creating a new router instance to define routes.

// Defining a route to serve the 'notes.html' file when accessing '/notes' path.
router.get('/notes', (req, res) => {
    
    
    // Sending the 'notes.html' file as the response. 
    // The 'path.join' ensures the correct path is formed, even across different operating systems.
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Exporting the router so it can be used in other parts of the application.
module.exports = router;