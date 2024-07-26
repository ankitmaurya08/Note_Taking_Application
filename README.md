# Simple Note Taking App

## Objective

Develop a simplified web application for taking notes that utilizes local storage for data persistence. This application demonstrates front-end development skills including CRUD operations, pagination, and responsive design.

## Project Overview

The "Simple Note Taking App" allows users to:

- Create new notes.
- View all notes with pagination (10 notes per page).
- Edit existing notes.
- Delete notes.
- Search through notes.
- View notes with their respective timestamps.

## Technical Requirements

### Front-End

**Framework/Library:** Utilize React.js to leverage its efficient update and rendering capabilities for dynamic content like pagination and live search.

### UI Requirements

- User-friendly interface for interacting with notes.
- Real-time feedback for operations such as loading and input validation.
- Responsive design to ensure usability across different devices.

### Data Handling

**Local Storage:**

- Use the browser's local storage to create, read, update, and delete notes.
- Store notes as an array of objects, each containing id, title, content, and timestamp.

### Features

- **CRUD Operations:**
  - **Create:** Add new notes via a form.
  - **Read:** Fetch and display notes from local storage.
  - **Update:** Modify existing notes.
  - **Delete:** Remove notes permanently.
- **Pagination:** Implement pagination to manage and navigate through lists of notes, displaying 10 notes per page.
- **Search Functionality:** Provide a search bar to filter notes by title or content.
- **Timestamps:** Record and display the creation or last modification time for each note.

### User Interface Design

- **List View:** Displays the paginated list of notes with options to edit or delete, a search bar at the top, and a button to add new notes.
- **Note Item:** Each note displays the title, a brief content excerpt, and the timestamp.
- **Note Form:** A modal or dedicated page for adding or editing note details.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/simple-note-taking-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd simple-note-taking-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to:
   ```sh
   http://localhost:3000
   ```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
![Updatebook](https://github.com/user-attachments/assets/bec7dfd4-51e0-46a1-940e-97ea3c429ac0)
![AllBooks](https://github.com/user-attachments/assets/71a7c2f6-5fb5-4727-b751-00f0c370cb19)
![AddBook](https://github.com/user-attachments/assets/a7dbf521-252e-42d3-9eb7-890f5dddea12)
