const API_URL = "http://localhost:5000/api/v1/health/calculate";

function goToCalc() {
  window.location.href = "calculator.html";
}

async function calculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;

  const resultDiv = document.getElementById("result");

  if (!weight || !height || !age) {
    resultDiv.innerHTML = "<p style='color:red;'>Fill all fields</p>";
    return;
  }

  try {
    resultDiv.innerHTML = "<p>Calculating...</p>";

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ weight, height, age, gender, activity })
    });

    const data = await res.json();
    const d = data.data;

    resultDiv.innerHTML = `
      <div class="result-card">
        <h3>Results</h3>
        <p>BMI: ${d.bmi}</p>
        <p>Ideal Weight: ${d.idealWeight} kg</p>
        <p>Calories: ${d.maintenanceCalories}</p>
        <p>Deficit: ${d.deficitCalories}</p>

        <h3>Meal Plan</h3>
        <p>${d.mealPlan.breakfast}</p>
        <p>${d.mealPlan.lunch}</p>
        <p>${d.mealPlan.dinner}</p>
      </div>
    `;
  } catch (err) {
    resultDiv.innerHTML = "<p style='color:red;'>Server error</p>";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "calculator.html";
    });
  }
});