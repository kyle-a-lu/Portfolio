# Kyle Lu – Web Developer Portfolio

A portfolio built with **React** and **Node.js**, featuring a contact form powered by **Nodemailer**.

---

## Tech Stack

- **Frontend:** HTML5, SCSS, React, Motion Library
- **Backend:** Node.js, Express, Nodemailer
- **Build Tool:** Vite

---

## Project Structure

Portfolio/
├─ backend/
│ ├─ server.js
│ ├─ package.json
│ └─ .env # Email credentials (Not in GitHub)
├─ frontend/
│ ├─ public/
│ └─ src/
│ ├─ App.js
│ └─ ContactForm.js
│ └─ package.json
├─ .gitignore
└─ README.md

---

## Getting Started

### Frontend

cd frontend  
npm install  
npm run dev

### Backend

cd backend  
npm install  
npm start

### Running Both in Development

You can run React and the backend simultaneously from the project root (if you add a dev script):

npm run dev

### Environment Variables

Create a `.env` file in the `backend` folder with your email credentials:

EMAIL_USER=your-email@gmail.com  
EMAIL_PASS=your-app-password
