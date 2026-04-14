resultDiv.innerHTML = `
  <div class="result-card">
    <h3>Results</h3>

    <p><strong>BMI:</strong> ${d.bmi} (${d.bmiCategory})</p>
    <p><strong>Ideal Weight:</strong> ${d.idealWeight} kg</p>
    <p><strong>Maintenance Calories:</strong> ${d.maintenanceCalories}</p>
    <p><strong>Calorie Deficit:</strong> ${d.deficitCalories}</p>
    <p><strong>Estimated Plan:</strong> ${d.estimatedDays} days</p>

    <h3>Meal Plan</h3>
    <p>🍳 ${d.mealPlan.breakfast}</p>
    <p>🍗 ${d.mealPlan.lunch}</p>
    <p>🥗 ${d.mealPlan.dinner}</p>
  </div>
`;