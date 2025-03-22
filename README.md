# Coralsoft Test Task

## 📌 Project Overview
This project is a test assignment for Coralsoft, built using modern front-end technologies. The application includes a Sign-In page (without a backend) and a Home Page (Dashboard) that visualizes cat breed data from TheCatAPI.

## 🚀 Setup & Installation
To run the project locally, follow these steps:

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Tech Stack
The project is built using the following technologies:
- **React** – Component-based UI development
- **Redux Toolkit** – State management
- **RTK Query** – API data fetching
- **React Router** – Navigation
- **Recharts** – Data visualization
- **Preline UI** – UI components
- **Tailwind CSS** – Styling
- **TypeScript** – Static typing
- **Vite** – Fast development build tool

## ✨ Features
- **Sign-In Page** (with validation, fake authentication)
- **Dashboard Page** (data visualization & filtering)
- **Charts & Graphs** for cat breed data
- **Sorting & Filtering** using Preline UI
- **Responsive UI** with Tailwind CSS
- **Deployed on Vercel**

## 📌 Prerequisites
- The app must use **Redux Toolkit, RTK Query, TypeScript, React Router, Recharts, Preline UI, Tailwind CSS, and Vite**.
- You are free to modify or add files for better code organization.
- Any validation-related package can be used.

## 📋 Requirements
### 🔹 Sign-In Page
- Validate email format.
- Fake authentication with:
  - **Email:** `test@test.test`
  - **Password:** `password`
  - If incorrect, show a "User not found" error.
- Show error messages for invalid input.
- Implement a loading state.

### 🔹 Dashboard Page
- Integrate **TheCatAPI** `/breeds` endpoint.
- Fetch and display breed data in a **grid** with:
  - Name
  - Origin
  - Description
  - Adaptability
  - Affection Level
  - Life Span
- Implement **sorting & filtering** (criteria up to you).
- **Data Visualization:**
  - Display charts using **Recharts**.
  - Fix existing visualizations if needed.

## 🌍 Deployment
The app is hosted on **Vercel**.

## ✅ Evaluation Criteria
### 🔹 Functionality
- API integration works correctly.
- Validation logic functions properly.

### 🔹 Code Structure & Best Practices
- Modular and well-organized components.
- Efficient state management with Redux Toolkit.
- Proper error handling.

### 🔹 TypeScript Usage
- Strong type definitions.
- Minimal use of `any`.
- Consistent typing patterns.

### 🔹 Performance & Optimization
- Avoid unnecessary re-renders.
- Efficient API data fetching.

### 🔹 Code Quality
- Clean, readable, and maintainable code.
- Adheres to **DRY** (Don't Repeat Yourself) principles.

## 📌 Conclusion
This project demonstrates modern React development practices, including **state management, API integration, data visualization, and UI design**. The focus is on **maintainability, performance, and usability**.

Feel free to improve or expand upon the features! 🚀



- Unit test coverage.
- Easy to extend and modify.
- Well-documented code.
- Proper error boundaries.
