const API_URL = "http://localhost:5000/api/v1/health/calculate";

async function calculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;

  const resultDiv = document.getElementById("result");

  if (!weight || !height || !age) {
    resultDiv.innerHTML = "<p style='color:red;'>Please fill all fields</p>";
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

    // SAVE DATA
    localStorage.setItem("fitData", JSON.stringify({
      bmi: d.bmi,
      calories: d.maintenanceCalories,
      deficit: d.deficitCalories,
      meal: d.mealPlan
    }));

    // SHOW RESULT
    resultDiv.innerHTML = `
      <div class="result-card">
        <p><strong>BMI:</strong> ${d.bmi}</p>
        <p><strong>Calories:</strong> ${d.maintenanceCalories}</p>
        <p><strong>Deficit:</strong> ${d.deficitCalories}</p>
      </div>
    `;

    // REDIRECT
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } catch (err) {
    resultDiv.innerHTML = "<p style='color:red;'>Server error</p>";
  }
}