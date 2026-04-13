A full-stack fitness and calorie calculator web application that helps users calculate **BMI, Ideal Weight, Maintenance Calories, and Calorie Deficit**.

This project is built for learning **Full Stack Development + DevOps deployment (AWS EC2)**.

---

## 📌 Features

* ✅ BMI (Body Mass Index) Calculator
* ✅ Ideal Weight Calculation
* ✅ Daily Calorie Needs (BMR + TDEE)
* ✅ Calorie Deficit for Weight Loss
* ✅ Clean UI with multi-page navigation
* ✅ REST API backend
* ✅ Ready for cloud deployment (AWS EC2)

---

## 🛠️ Tech Stack

### Frontend:

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend:

* Node.js
* Express.js
* CORS

---

## 📁 Project Structure

```
fitcal-pro/
│
├── frontend/
│   ├── index.html
│   ├── calculator.html
│   ├── contact.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── healthRoutes.js
│   ├── controllers/
│   │   └── healthController.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/fitcal-pro.git
cd fitcal-pro
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Run Frontend

```
cd ../frontend
python3 -m http.server 3000
```

Open in browser:

```
http://localhost:3000
```

---

## 🔗 API Endpoint

### POST /api/v1/health/calculate

#### Request Body:

```
{
  "weight": 70,
  "height": 170,
  "age": 22,
  "gender": "male"
}
```

#### Response:

```
{
  "success": true,
  "data": {
    "bmi": "24.22",
    "idealWeight": "63.58",
    "maintenanceCalories": 2000,
    "deficitCalories": 1500
  }
}
```

---

## ☁️ Deployment (AWS EC2)

### Steps:

1. Launch Ubuntu EC2 Instance
2. Connect via SSH
3. Install Node.js & npm
4. Clone repository
5. Run backend server
6. Serve frontend

---

## 🚀 Future Improvements

* 🔐 User Authentication (Login/Register)
* 📊 Dashboard with charts
* 🗄️ Database integration (MongoDB)
* ⚛️ React Frontend
* 🐳 Docker + CI/CD pipeline

---

## 🎯 Learning Goals

This project helps in:

* Full Stack Development
* API Design & Integration
* Linux & Server Management
* Git & GitHub Workflow
* Cloud Deployment (AWS EC2)

---

## 👨‍💻 Author

**Shaheen**
Aspiring Cloud & DevOps Engineer 🚀

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share with others

---

## 📞 Contact

For collaboration or freelance work:

* 📧 Email: [imshaheensardar.it@gmail.com](mailto:imshaheensardar.it@gmail.com)

---

💡 *This project is part of my journey to become a professional Cloud & DevOps Engineer and start earning through freelancing.*
