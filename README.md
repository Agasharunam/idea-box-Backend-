This is the backend of the Idea Box project, built using Node.js, Express.js, and MongoDB. It provides a RESTful API for managing user authentication and idea submissions. The backend supports user signup/login, adding ideas, updating their status, viewing ideas by category, and deleting ideas.

🔧 Tech Stack
Node.js – Server runtime
Express.js – Web framework
MongoDB – NoSQL database
Mongoose – ODM for MongoDB
bcrypt – For hashing passwords
dotenv – To manage environment variables
CORS – To handle cross-origin requests

📁 Features
✅ User Signup and Login with password hashing
✅ Add New Ideas with title, description, and status
✅ View Ideas in list or Kanban-style from frontend
✅ Update Idea Status (New, In Progress, Done)
✅ Delete Ideas from the dashboard
✅ Secure API Routes with modular route structure

API Endpoints
Auth Routes (User)
POST /api/users/signup – Register a new user

POST /api/users/login – Log in an existing user

Idea Routes
GET /api/ideas – Fetch all ideas

POST /api/ideas – Add a new idea

PUT /api/ideas/:id – Update an idea’s status

DELETE /api/ideas/:id – Delete an idea

Environment Variables (.env)
ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
🚀 How to Run Locally
bash
Copy
Edit
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Run the server
npm start
