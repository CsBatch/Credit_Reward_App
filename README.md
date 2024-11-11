
# Credit Reward App

The **Credit Reward App** is a full-stack application that allows users to earn and redeem rewards based on their activities. The application includes both a **frontend** built with Angular and a **backend** built with Node.js and Express. The system stores data in a **MongoDB** database and ensures secure user authentication using **JWT**.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [License](#license)

## Features
- **User Authentication**: Secure login and registration using JWT tokens.
- **Reward Management**: Allows users to create, view, and redeem rewards.
- **Admin Dashboard**: Admins can manage the rewards and users in the system.
- **Responsive UI**: Built with Angular and Bootstrap for mobile and desktop compatibility.

## Tech Stack
- **Frontend**: Angular, Bootstrap
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Styling**: Bootstrap
- **Database**: MongoDB

## Frontend Setup

1. Clone the repository.
    ```bash
    git clone https://github.com/yourusername/credit-reward-app.git
    cd credit-reward-app/frontend
    ```

2. Install the dependencies using npm:
    ```bash
    npm install
    ```

3. Serve the Angular app:
    ```bash
    ng serve
    ```

   This will start the frontend server on `http://localhost:4200`.

## Backend Setup

1. Clone the repository if you haven't already:
    ```bash
    git clone https://github.com/yourusername/credit-reward-app.git
    cd credit-reward-app/backend
    ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```

3. Set up your MongoDB database (either locally or using a cloud service like MongoDB Atlas).

4. Create a `.env` file in the backend folder to store your environment variables:
    ```env
    DB_URI=mongodb://localhost:27017/credit-reward-app
    JWT_SECRET=your-secret-key
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

   The backend will run on `http://localhost:5000`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/credit-reward-app.git
    ```

2. Navigate to the frontend and backend directories and run the respective installation commands:
    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

3. Make sure MongoDB is running if using a local database, or update the `.env` file for a cloud database connection.

4. Start both the frontend and backend servers.

## Dependencies

### Frontend
The following dependencies were installed manually for the frontend:
- `@angular/core`: The main Angular framework for building the app.
- `@angular/cli`: CLI tool for creating and managing Angular projects.
- `@angular/forms`: Angular's form module for handling form inputs.
- `@angular/router`: Angular's routing module for navigating between pages.
- `bootstrap`: A front-end framework for building responsive websites.
- `rxjs`: A library for reactive programming using observables.

To install these dependencies, run:
```bash
npm install @angular/core @angular/cli @angular/forms @angular/router bootstrap rxjs
```

### Backend
The following dependencies were installed manually for the backend:
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB ODM for easier database interactions.
- `jsonwebtoken`: For generating and verifying JWT tokens for authentication.
- `bcryptjs`: For hashing passwords securely.
- `dotenv`: For managing environment variables.
- `cors`: For enabling cross-origin requests between the frontend and backend.

To install these dependencies, run:
```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv cors
```

### Development Dependencies
- `nodemon`: Automatically restarts the server during development.

To install this dependency, run:
```bash
npm install --save-dev nodemon
```

## Usage
1. Open the Angular frontend in your browser at `http://localhost:4200` to interact with the app.
2. Use the backend API for managing rewards and user authentication at `http://localhost:5000/api`.
3. Make sure to sign up or log in to view and manage rewards.

### Admin Dashboard
Admins can log in using their credentials to access the admin dashboard and manage users and rewards. Access the dashboard at `http://localhost:4200/admin`.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
