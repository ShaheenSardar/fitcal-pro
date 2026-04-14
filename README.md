# 🔥 FitCal Pro

A full-stack fitness web application that helps users calculate BMI, daily calories, ideal body weight, and generate smart meal plans.

---

## 🚀 Features

### 🧮 Calculator System

* BMI Calculation
* Ideal Weight Calculation
* Daily Calorie Needs (TDEE)
* Calorie Deficit for Weight Loss
* Activity-Based Calorie Adjustment

### 🍽️ Meal Plan Generator

* Automatic meal suggestions
* Based on calorie goals
* Includes breakfast, lunch, and dinner

### ❤️ IBW Calculator (Medical Style)

* Ideal Body Weight (Devine Formula)
* Adjusted Body Weight
* Clean structured UI (MDCalc-style layout)

### 📊 Dashboard

* Displays:

  * BMI
  * Calories
  * Deficit
  * Meal Plan
* Data saved using LocalStorage

### 🎨 UI/UX

* Modern SaaS-style design
* Responsive layout (Grid + Flexbox)
* Icons using Font Awesome
* Professional landing page
* Structured footer & navigation

---

## 🗂️ Project Structure

```
fitcal-pro/
│
├── frontend/
│   ├── index.html
│   ├── calculator.html
│   ├── dashboard.html
│   ├── ibw.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── app.js
│       ├── dashboard.js
│       └── ibw.js
│
├── backend/
│   ├── server.js
│   └── controllers/
│       └── healthController.js
│
└── README.md
```

---

## ⚙️ Technologies Used

### Frontend

* HTML5
* CSS3 (Grid + Flexbox)
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

---

## ▶️ How to Run Locally

### 1️⃣ Start Backend

```bash
cd backend
npm install
node server.js
```

### 2️⃣ Start Frontend

```bash
cd frontend
npx serve -l 3000
```

### 3️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🌐 API Endpoint

```
POST /api/v1/health/calculate
```

### Request Body:

```json
{
  "weight": 70,
  "height": 170,
  "age": 25,
  "gender": "male",
  "activity": 1.55
}
```

---

## 💡 Future Improvements

* 🔐 User Authentication (Login/Register)
* 🗄️ Database Integration (MongoDB)
* 📈 Charts & Analytics Dashboard
* ☁️ Deployment on AWS EC2
* 🔄 CI/CD with GitHub Actions

---

## 👨‍💻 Author

**Shaheen**
📧 [imshaheensardar.it@gmail.com](mailto:imshaheensardar.it@gmail.com)
📍 Pakistan

---

## ⭐ Project Status

🚧 In Progress (Actively Improving & Scaling)

---

## 💸 Goal

This project is being built as a **portfolio + freelance-ready SaaS product** to start earning through remote work and DevOps/cloud opportunities.

---
