
# PERN Stack Todo App

This is a full-stack to-do application developed using the PERN stack (PostgreSQL, Express, React, Node.js). It provides a simple and user-friendly interface for managing your to-do list.
It has two folders the (client) folder for the frontend code and the (server) folder for the backend code

## Features

- Add new tasks to your to-do list.
- Edit existing tasks to update their details.
- Delete tasks when they are completed or no longer needed.
- Real-time updates for a seamless user experience.

## Prerequisites

Before getting started, you should have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

Follow the steps below to get the project up and running.

### Client (React)

Open a terminal and navigate to the `client` directory:
cd client

Install the client-side dependencies:
npm install

Start the client application:
npm start
The client will run on http://localhost:3000.


### Server ( Postgres, Express, Node )

Server (Node.js and Express)
Open a separate terminal and navigate to the server directory:
cd server

Install the server-side dependencies:
npm install

Create a PostgreSQL database for the application.
Set up your database connection in the server/config/config.json file.
Run the database migrations to create the necessary tables:

npx sequelize db:migrate
Start the server:

npm start
The server will run on http://localhost:5000.

### End Points to use

API Endpoints
GET http://localhost:5000/todos : Retrieve all todos.
POST http://localhost:5000/todos : Add a new todo.
PUT http://localhost/todos:5000/id : Update a todo by ID.
DELETE http://localhost/todos:5000/id : Delete a todo by ID.


### Contributions

If you'd like to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name.
Make your changes and commit them: git commit -m 'Add a new feature'.
Push to the branch: git push origin feature/your-feature-name.
Open a pull request.



### Acknowledgements

This project was created as a learning exercise using the PERN stack.
Thanks to the open-source community for their contributions to the technologies used in this project.



