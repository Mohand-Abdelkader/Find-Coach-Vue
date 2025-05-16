# 🎯 Find a Coach – Vue.js Application

**Find a Coach** is a full-featured web application built with Vue.js that enables users to find and connect with expert coaches specializing in frontend, backend, and career development.

This project showcases key Vue.js ecosystem features such as Vue Router, Vuex, the Composition API, and more. Developed as part of the **"Vue - The Complete Guide"** course by Maximilian Schwarzmüller, it demonstrates practical skills in creating production-ready Vue applications.

---

## 🚀 Project Description

Users can browse available coaches, view detailed profiles, register as a coach, and interact via a secure messaging system. Authenticated users can manage their profiles, filter coaches by specialty or pricing, and access personalized features.

---

## 🛠️ Tech Stack and Libraries

- **Vue.js** – Progressive JavaScript framework for building UIs  
- **Vue Router** – Declarative routing system  
- **Vuex** – Centralized state management  
- **Axios** – HTTP client for API communication  
- **Node.js + Express + MongoDB (Backend)** – For data storage and API (explained in the "How It Works" section)

---

## ⚙️ How It Works

- **🏠 Home Page**  
  Displays a searchable list of coaches. Users can search by name, specialty, or location.

- **👤 Coach Profiles**  
  Includes name, image, location, areas of expertise, and pricing details.

- **🔐 Login & Sign-Up**  
  Users can register and log in to save favorites and access profile features.

- **📨 Messaging System**  
  Users can contact coaches directly via a form on each coach's profile page.

- **📊 Admin Dashboard (for Coaches)**  
  Authenticated coaches can:
  - Manage their profiles (specialties, availability, pricing)
  - View and respond to messages from users

---

## 💡 Features

1. **User Authentication** – Secure login and registration
2. **Coach Search** – Filter by specialty, availability, or price
3. **Dynamic Coach Profiles** – Showcases each coach’s skills and info
4. **Vuex Store** – Centralized state management for efficient data sharing
5. **Store Modularization** – Organized into modules for scalability
6. **Dynamic Routing** – Route params for profile pages, admin areas
7. **Lazy Loading** – Components and routes load only when needed
8. **Navigation Guards** – Secure routes with role-based access

---

## 📚 Acknowledgements

This project was built as part of the course:  
**[Vue - The Complete Guide (incl. Router & Composition API)](https://www.udemy.com/course/vuejs-2-the-complete-guide/)** by **Maximilian Schwarzmüller**.
