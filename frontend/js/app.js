function goToCalc() {
  window.location.href = "calculator.html";
}

async function calculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  const res = await fetch("http://localhost:5000/api/health", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ weight, height, age, gender })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <p>BMI: ${data.bmi}</p>
    <p>Ideal Weight: ${data.idealWeight} kg</p>
    <p>Calories: ${data.calories}</p>
  `;
}