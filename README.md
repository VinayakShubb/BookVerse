---

## Create a file **`README.md` in BookVerse root** and paste this:

---

#  BookVerse – MERN Online Book Store

BookVerse is a full-stack **MERN** online book store application where users can browse books, manage carts, place orders, and handle authentication.

This project demonstrates practical usage of **React, Redux, Node.js, Express, and MongoDB** in a real-world application.

---

##  Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Redux Toolkit

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

##  Features

- User authentication (Signup / Login)
- Browse books
- Add books to cart
- Favorite books
- Place and manage orders
- Secure REST APIs with JWT

---

## Project Structure


```
BookVerse/
├── backend/
│   ├── conn/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── store/
│   ├── pages/
│   └── package.json
│
└── README.md

````

---

## ⚙️ How to Run the Project Locally

### Clone the Repository

```bash
git clone https://github.com/VinayakShubb/BookVerse.git
cd BookVerse
````

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## What I Learned From This Project

* Structuring a MERN project professionally
* Implementing JWT authentication
* Managing global state using Redux Toolkit
* Connecting frontend with REST APIs
* Handling environment variables securely

---

##  Future Improvements

* Payment gateway integration
* Book reviews and ratings

---

## Author

**Vinayak Shubb**
GitHub: [https://github.com/VinayakShubb](https://github.com/VinayakShubb)

---

## Commit README

After saving the file:

```bash
git add README.md
git commit -m "Add project documentation"
git push
````

