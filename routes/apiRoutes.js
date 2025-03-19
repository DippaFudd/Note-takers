const fs = require('fs');  // Importing 'fs' (File System) module to interact with files.
const path = require('path');  // Importing 'path' module to handle file paths.
const router = require('express').Router();  // Creating a new router instance for Express.

// GET route to retrieve all notes from the 'db.json' file.
router.get('/notes', (req, res) => {
    
    // Reading the 'db.json' file where the notes are stored.
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            // If an error occurs while reading the file, respond with a 500 error.
            return res.status(500).json({ error: 'Unable to read the notes data' });
        }
        
        // Parsing the data and sending it back as a JSON response.
        res.json(JSON.parse(data)); 
    });
});

// POST route to add a new note to the 'db.json' file.
router.post('/notes', (req, res) => {
    const newNote = req.body;  // Retrieving the new note data from the request body.

    // Validating that the new note contains both 'title' and 'text'.
    if (!newNote.title || !newNote.text) {
        // If the note is missing 'title' or 'text', respond with a 400 error.
        return res.status(400).json({ error: 'Both title and text are required' });
    }

    // Reading the existing notes from 'db.json' to append the new note.
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            // If there's an error reading the file, respond with a 500 error.
            return res.status(500).json({ error: 'Unable to read the notes data' });
        }

        // Parsing the existing notes data.
        const notes = JSON.parse(data);

        // Assigning a unique 'id' to the new note using the current timestamp.
        newNote.id = Date.now().toString();

        // Adding the new note to the array of existing notes.
        notes.push(newNote);

        // Writing the updated notes array back to 'db.json'.
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                // If there's an error writing the file, respond with a 500 error.
                return res.status(500).json({ error: 'Unable to save the note' });
            }
            // Responding with the newly added note.
            res.json(newNote); 
        });
    });
});

// DELETE route to remove a specific note by its ID.
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;  // Retrieving the 'id' of the note to delete from the URL parameters.

    // Reading the existing notes from 'db.json' to find and remove the note.
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            // If an error occurs while reading the file, respond with a 500 error.
            return res.status(500).json({ error: 'Unable to read the notes data' });
        }

        // Parsing the notes data.
        let notes = JSON.parse(data);

        // Filtering out the note that matches the given 'id' to delete it.
        notes = notes.filter(note => note.id !== noteId);

        // Writing the updated notes array back to 'db.json' after deletion.
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                // If there's an error writing the file, respond with a 500 error.
                return res.status(500).json({ error: 'Unable to delete the note' });
            }
            // Responding with a success message.
            res.json({ message: 'Note deleted successfully' });
        });
    });
});

module.exports = router;  // Exporting the router to be used in other parts of the application.
