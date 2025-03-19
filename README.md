# Note Taker Application
The Note Taker application allows users to easily create, save, and organize notes. Users can write notes, save them, and view existing notes. This simple yet powerful tool helps small business owners keep track of their thoughts and tasks.


## User Story
- **AS A** small business owner
- **I WANT** to be able to write and save notes
- **SO THAT** I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria

- **GIVEN** a note-taking application
- **WHEN** the user opens the Note Taker
- **THEN** they are presented with a landing page that contains a link to a notes page.


- **GIVEN** a link to the notes page
- **WHEN** the user clicks on the link to the notes page
- **THEN** they are presented with a page that has:
A list of existing notes in the left-hand column.
Empty fields to enter a new note title and text in the right-hand column.


- **GIVEN** the user has entered a new note title and text
- **WHEN** they enter the information
- **THEN** the "Save Note" and "Clear Form" buttons appear in the navigation at the top of the page.


- **GIVEN** the user has entered a new note and clicked the "Save Note" button
- **WHEN** the "Save Note" button is clicked
- **THEN** the new note is saved and displayed in the left-hand column alongside other notes.
The buttons in the navigation (Save, Clear Form) will disappear after saving the note.


- **GIVEN** the user clicks on an existing note in the left-hand column
- **WHEN** the note is clicked
- **THEN** the note appears in the right-hand column with its details.


- **GIVEN** the user is viewing an existing note
- **WHEN** the "New Note" button in the navigation is clicked
- **THEN** empty fields appear to enter a new note title and text in the right-hand column, and the "New Note" button disappears.

## Installation
To install the necessary dependencies, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
    git clone (cloned repo)
   
2. **Navigate to the Project Directory**: Change your current directory to the project directory:
    cd Note-taker
    
3. **Install Dependencies**: Install the required dependencies using npm:
    npm i
   
5. **Test**: Npm run test   
    
6. **Run the Application**: Start the application by running the following command:
    node server.js

## Screenshots
![Image Alt](https://github.com/DippaFudd/Note-taker/blob/0285b43946162ff66f8cf64caae313d2b40fb5ae/2025-03-18.png)
![Image Alt](https://github.com/DippaFudd/Note-taker/blob/0285b43946162ff66f8cf64caae313d2b40fb5ae/2025-03-18%20(1).png)
