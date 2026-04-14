<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard - FitCal Pro</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

<nav class="navbar">
  <h1>🔥 Dashboard</h1>
  <div>
    <a href="index.html">Home</a>
    <a href="calculator.html">Calculator</a>
  </div>
</nav>

<div class="container">

  <h2>Your Fitness Overview</h2>

  <!-- BUTTON -->
  <a href="calculator.html" class="btn">➕ Enter Your Data</a>

  <!-- STATS -->
  <div class="features">

    <div class="card">
      <h3>BMI</h3>
      <p id="dash-bmi">--</p>
    </div>

    <div class="card">
      <h3>Calories</h3>
      <p id="dash-cal">--</p>
    </div>

    <div class="card">
      <h3>Deficit</h3>
      <p id="dash-def">--</p>
    </div>

  </div>

  <!-- MEAL -->
  <div class="card">
    <h3>Meal Plan</h3>
    <p id="dash-meal">No data yet</p>
  </div>

</div>

<script src="js/dashboard.js"></script>

</body>
</html>