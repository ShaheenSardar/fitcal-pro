const data = JSON.parse(localStorage.getItem("fitData"));

if (data) {
  document.getElementById("dash-bmi").innerText = data.bmi;
  document.getElementById("dash-cal").innerText = data.calories;
  document.getElementById("dash-def").innerText = data.deficit;

  document.getElementById("dash-meal").innerText =
    data.meal.breakfast + " | " +
    data.meal.lunch + " | " +
    data.meal.dinner;
}