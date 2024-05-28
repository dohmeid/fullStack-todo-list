# fullStack-todo-list :star2:

### FTS-TASK11 - facilitating CRUD (Create, Read, Update, Delete) operations using Node.js and ReactJS

### :stars: Overview
This repository creates a TODO List web application with various features to manage tasks efficiently. It implements a user-friendly interface that allows users to add, update, and remove TODO items. 
The web app performs CRUD operations on todos' list. It consists of a frontend (FE) component that complements the backend (BE) part of the website. 

-----
### :dart: Features
- Create Tasks: Add new tasks to your list with ease.
- Update Tasks: Mark tasks as complete or edit their details.
- Delete Tasks: Remove tasks from your list when they're no longer needed.
- Search for Tasks.
- Count the number of TODOs in the footer.
- Asynchronous JavaScript methods: are used for API interactions (e.g., Fetch API, async/await).
- The frontend part of the app facilitates the CRUD (Create, Read, Update, Delete) operations implemented in Node.js.
- The app conects to a MongoDB database and uses Mongoose for object modeling.
- The app handles the potential errors gracefully. If an error occurs, the API returns a suitable status code and a descriptive error message.
- Express Server Endpoints:
  - **`GET /todos`**: Fetch all todos.
  - **`POST /todos`**: Add a new todo.
  - **`PUT /todos/[todoId]`**: Mark a specific todo as completed.

-----

### :space_invader: Technologies Used
<div align="left">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="30" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" height="30" />
</div>

-----
### :joystick: Getting Started 
To run this application locally, follow these steps:
1. Clone the repository -> **`git clone https://github.com/dohmeid/my-note-keeper.git`**
2. Go to folder server -> **`cd server`**
3. Make sure you have MongoDB installed and running locally.
4. Start the server using: **`npm start`**
5. Go to folder client  ->   **`cd client`**
6. Start the development server using ->   **`npm start`**
7. You can access the project by navigating to http://localhost:3000 in your web browser.

-----
### :eye: Preview

![todo](https://github.com/dohmeid/fullStack-todo-list/assets/90987176/99f47732-dd34-4c9c-b912-7c38b0bc51fc)
