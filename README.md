## Todo List App
This is a Todo List application built with Next.js. The app allows users to manage their tasks efficiently with features to add, update, and delete tasks. It includes user authentication using Google Sign-In powered by NextAuth.js.

# Features
Add new tasks with task name, date, and time.
Update existing tasks.
Delete tasks.
User authentication with Google Sign-In using NextAuth.js.
Responsive design for mobile and desktop views.
# Technologies Used
Next.js
React
NextAuth.js for authentication
MongoDB for the database
Mongoose for MongoDB object modeling
# Getting Started
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
MongoDB
Google Developer Account
Installation
Clone the repository:

git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
# Install dependencies:

npm install
Setup environment variables:
Create a .env.local file in the root of your project and add the following:


NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
Run the development server:

# npm run dev
Open http://localhost:3000 with your browser to see the result.

# Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Push your project to GitHub.
Import your project on Vercel:
Follow the instructions on vercel.com to deploy your project.

Add environment variables in Vercel:
Go to your project settings on Vercel and add the same environment variables as mentioned in the .env.local file.

# Usage
Sign In:
Click on the "Sign In" button to log in using your Google account.

Add Task:
Fill in the task details (name, date, time) and click "Add" to save the task.

Update Task:
Click on a task to edit its details and save changes.

Delete Task:
Click on the delete icon next to a task to remove it from the list.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs, features, or improvements.

Fork the repository
Create your feature branch (git checkout -b feature/your-feature-name)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature-name)
Open a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgements
Next.js
React
NextAuth.js
MongoDB
Mongoose