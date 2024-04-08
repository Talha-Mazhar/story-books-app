# Simple Story Book App

This is a simple web application for managing stories. Users can create, read, update, and delete stories. The application also includes Google authentication using Passport.js for user authentication.

## Features

- **CRUD Operations:** Users can create, read, update, and delete stories.
- **Google Authentication:** Users can log in using their Google accounts.
- **Protected Routing:** Certain routes are protected and can only be accessed by authenticated users.
- **Sessions:** User sessions are managed to keep users logged in across requests.

## Technologies

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Handlebars (for views)
- Passport.js (for authentication)
- Express-session (for session management)

## Setup

1. **Clone the repository:**

   git clone https://github.com/Talha-Mazhar/story-books-app.git

2. **Install dependencies:**
   
   cd story-books-app
   npm install

4. **Configure environment variables:**
   
   MONGO_URI=your_mongodb_uri
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret

5. **Run Application:**
   
   npm start

5. **Access the application:**

   Open your web browser and navigate to
   http://localhost:3000.

