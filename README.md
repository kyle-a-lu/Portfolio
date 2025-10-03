# Kyle Lu – Web Developer Portfolio

A portfolio built with **React** and **Node.js**, featuring a contact form powered by **Nodemailer**.

---

## Tech Stack

- **Frontend:** HTML5, SCSS, React, Motion Library
- **Backend:** Node.js, Express, Nodemailer
- **Build Tool:** Vite

---

## Features

- Responsive portfolio layout
- Contact form that sends emails using Nodemailer
- Smooth animations with Motion Library
- Easy to set up and run locally

---

## Project Structure

-Portfolio/
--backend/
---server.js
---package.json
---.env # Email credentials (Not in GitHub)
--frontend/
---public/
---src/
----App.js
----ContactForm.js
---package.json
--.gitignore
--README.md

---

### Frontend

#### Navigate to backend folder
cd frontend
#### Install dependencies
npm install
# Start backend server
npm run dev

### Backend

#### Navigate to backend folder
cd backend
#### Install backend dependencies
npm install
#### Start backend server
npm start

### Running Both in Development

From project root:
npm run start # Start both frontend and backend concurrently

### Environment Variables

Create a `.env` file in the `backend` folder with your email credentials:
This file should not be pushed to GitHub

EMAIL_USER=your-email@gmail.com  
EMAIL_PASS=your-app-password
