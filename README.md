# User Authentication API

This project is a simple **User Authentication API** built with **Node.js, Express, and MongoDB**.  
It provides APIs for **User Registration, Login, and Forgot Password**.  

## 🚀 Features
- Register a new user with **username, email, and password**
- Login using **username and password**
- Forgot password generates a **reset token** (simulated via console)
- JWT authentication for secure login sessions
- MongoDB for user data storage

---

## 📂 Project Structure
user-auth-api/
├── config/
│ └── db.js
├── controllers/
│ └── authController.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── middleware/
│ └── authMiddleware.js
├── utils/
│ └── sendEmail.js
├── server.js
├── package.json
└── .env (not included in repo)


---

## ⚙️ Installation & Setup

# 1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/User-Authentication-API.git
   cd User-Authentication-API
   
Install dependencies:
npm install

Create a .env file in the project root:
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server:
npm run dev

## 📌 API Endpoints
# 1. Register User

POST /api/auth/register
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}

# 2. Login User

POST /api/auth/login
{
  "username": "testuser",
  "password": "password123"
}

# 3. Forgot Password

POST /api/auth/forgot-password
{
  "email": "test@example.com"
}
➡️ A reset link with token will be logged in the console (simulated email).

---

## 🛠️ Tech Stack

Node.js + Express.js

MongoDB + Mongoose

JWT (JSON Web Tokens) for authentication

dotenv for environment variables

---

## 📌 Notes

.env file is ignored for security.

Email sending is simulated by logging the reset link in the console.
