[![Live Site]](https://product-recommendation-client.web.app)

# 🛒 Product Recommendation System

A full-stack web application that allows users to **post product-related queries**, **receive recommendations**, and interact with the community.  
This project is built with **React (Vite)**, **Firebase Authentication**, **MongoDB**, **Express (Node.js)**, and **JWT** for secure backend operations.

---

## ✨ Features

- **User Authentication:**  
  - Firebase-based login & registration (Google / Email-Password).
  - JWT token-based backend route protection.
  
- **Query Management:**  
  - Users can create, update, and delete product queries.
  - Queries are displayed with sorting and filtering options.

- **Recommendations:**  
  - Add recommendations to a specific query.
  - Automatic increment/decrement of `recommendationCount`.

- **Search & Filter:**  
  - Search queries by product name.
  - Sort queries in **descending order** by `createdAt`.

- **Responsive UI:**  
  - Fully responsive and mobile-friendly design.
  - Custom UI built with **Tailwind CSS + DaisyUI**.

- **Dynamic Sections:**  
  - **My Queries** – Manage your own queries.
  - **My Recommendations** – Manage your submitted recommendations.
  - **Stats Section** – Displays platform insights (queries, recommendations, active users).
  - **FAQ Section** – Answers common user questions.

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- React Router DOM
- Tailwind CSS + DaisyUI
- React CountUp
- React Icons
- Axios & Fetch API

**Backend:**
- Node.js + Express
- MongoDB (CRUD operations)
- JWT Authentication
- Firebase Admin SDK for token verification

**Other Tools:**
- SweetAlert2 for alerts
- Date-fns for date formatting
- Firebase Hosting (optional)

---

