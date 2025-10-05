Task Manager App
A Fullstack Task Manager application built with:

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js, MongoDB
Authentication: JWT-based login & register
Features
User registration & login
JWT-based authentication for secure access
Dashboard with CRUD operations for tasks
Search tasks by title
Logout functionality
Installation & Run Locally
Clone the repository** **```bash git clone https://github.com/saranskk/task-manager.git
2.Go to the project folder cd task-manager

3.Install backend dependencies npm install

Create a .env file in the backend folder with: MONGO_URI=mongodb+srv://SaranyaKannan:Saransk230617@cluster0.qckyx2o.mongodb.net/?retryWrites=true&w=majority JWT_SECRET=your_jwt_secret PORT=5000
5.Run the backend server node index.js

6.Open index.html in browser to access the frontend. Demo Links Frontend (GitHub Pages): https://saranskk.github.io/task-manager/ Backend (Localhost): http://localhost:5000

Notes:

Make sure MongoDB is running or your cloud MongoDB URI is correct.
Registration → Dashboard → Tasks CRUD flow is fully working.
JWT token stored in localStorage for session management.
git clone https://github.com/saranskk/task-manager.git
