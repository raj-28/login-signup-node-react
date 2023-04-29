# login-signup-node-react
Login/Signup System using Node.js and React
This is a simple login/signup system built using Node.js and React. The backend uses Express, Mongoose, Passport, and JSON Web Tokens (JWTs) for authentication, while the frontend uses React and Axios for making HTTP requests.
Features
User signup with password hashing using bcrypt
User login with Passport Local Strategy and JWT authentication
Protected route that requires authentication
CORS enabled to allow cross-origin requests
Installation
Clone the repository: git clone https://github.com/your-username/login-signup-node-react.git
Navigate to the backend folder: cd login-signup-node-react/backend
Install dependencies: npm install
Start the server: node app.js
Open a new terminal window and navigate to the frontend folder: cd ../frontend
Install dependencies: npm install
Start the React app: npm start
Open http://localhost:3000 in your browser to see the app
Usage
Navigate to http://localhost:3000/signup to create a new user
Navigate to http://localhost:3000/login to log in with an existing user
Navigate to http://localhost:3000/protected to access the protected route (requires authentication)
Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.
