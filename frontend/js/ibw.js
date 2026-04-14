function calculateIBW() {
  const sex = document.getElementById("sex").value;
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

  const resultDiv = document.getElementById("result");

  if (!height) {
    resultDiv.innerHTML = "<p style='color:red;'>Please enter height</p>";
    return;
  }

  let ibw;

  if (sex === "male") {
    ibw = 50 + 2.3 * (height - 60);
  } else {
    ibw = 45.5 + 2.3 * (height - 60);
  }

  ibw = ibw.toFixed(2);

  let adjustedWeight = null;

  if (weight && weight > ibw) {
    adjustedWeight = (ibw + 0.4 * (weight - ibw)).toFixed(2);
  }

  resultDiv.innerHTML = `
    <h3>Results</h3>
    <p><strong>Ideal Body Weight:</strong> ${ibw} kg</p>
    ${
      adjustedWeight
        ? `<p><strong>Adjusted Body Weight:</strong> ${adjustedWeight} kg</p>`
        : ""
    }
  `;
}