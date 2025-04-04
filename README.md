# Contact Manager App

A RESTful API built with **Node.js, Express, and MongoDB** for managing contacts. This application provides authentication using **JWT** and supports CRUD operations for managing user contacts.

## Features
- User authentication (Register, Login, Get Current User)
- CRUD operations for managing contacts
- Middleware for error handling and authentication
- Uses **Mongoose** for MongoDB interactions
- Secure password hashing with **bcrypt**

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Middleware:** express-async-handler, dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bharathbhatti/Contact-Manager-App.git
   cd Contact-Manager-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a **.env** file and add the following:
   ```plaintext
   PORT=5000
   CONNECTION_STRING=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes
| Method | Endpoint        | Description          |
|--------|---------------|----------------------|
| POST   | /api/users/register | Register a new user |
| POST   | /api/users/login    | Login user and get token |
| GET    | /api/users/current  | Get current logged-in user (requires token) |

### Contact Routes
| Method | Endpoint       | Description        |
|--------|--------------|--------------------|
| GET    | /api/contacts      | Get all contacts |
| POST   | /api/contacts      | Create a new contact |
| GET    | /api/contacts/:id  | Get a specific contact by ID |
| PUT    | /api/contacts/:id  | Update a contact by ID |
| DELETE | /api/contacts/:id  | Delete a contact by ID |

## Project Structure
```
backend-contacts/
├── config/
│   ├── dbConnection.js
├── controllers/
│   ├── contactController.js
│   ├── userController.js
├── middleware/
│   ├── errorHandler.js
│   ├── validateTokenHandler.js
├── models/
│   ├── contactModel.js
│   ├── userModel.js
├── routes/
│   ├── contactRoutes.js
│   ├── userRoutes.js
├── .gitignore
├── package.json
├── server.js
```

## Running in Development Mode
Use **nodemon** for hot-reloading during development:
```bash
npm run dev
```

## Author
**Bharath BN**  
[GitHub](https://github.com/Bharathbhatti)



