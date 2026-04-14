const API_URL = "http://localhost:5000/api/v1/health/calculate";

async function calculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;

  const resultDiv = document.getElementById("result");

  if (!weight || !height || !age) {
    resultDiv.innerHTML = "Fill all fields";
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ weight, height, age, gender, activity })
  });

  const data = await res.json();
  const d = data.data;

  localStorage.setItem("fitData", JSON.stringify({
    bmi: d.bmi,
    calories: d.maintenanceCalories,
    deficit: d.deficitCalories,
    meal: d.mealPlan
  }));

  window.location.href = "dashboard.html";
}