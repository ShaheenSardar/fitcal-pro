const API_URL = "http://localhost:5000/api/v1/health/calculate";

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
        <p><strong>BMI:</strong> ${d.bmi}</p>
        <p><strong>Ideal Weight:</strong> ${d.idealWeight} kg</p>
        <p><strong>Calories (TDEE):</strong> ${d.maintenanceCalories}</p>
        <p><strong>Deficit Calories:</strong> ${d.deficitCalories}</p>

        <h3>Meal Plan</h3>
        <p><strong>Breakfast:</strong> ${d.mealPlan.breakfast}</p>
        <p><strong>Lunch:</strong> ${d.mealPlan.lunch}</p>
        <p><strong>Dinner:</strong> ${d.mealPlan.dinner}</p>
      </div>
    `;

  } catch (err) {
    resultDiv.innerHTML = "<p style='color:red;'>Error connecting server</p>";
    console.error(err);
  }
}