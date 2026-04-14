exports.calculateHealth = (req, res) => {
  try {
    let { weight, height, age, gender, activity } = req.body;

    weight = Number(weight);
    height = Number(height);
    age = Number(age);
    activity = Number(activity);

    if (!weight || !height || !age || !gender || !activity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const h = height / 100;

    // ✅ BMI
    const bmi = (weight / (h * h)).toFixed(2);

    // ✅ BMI Category
    let bmiCategory = "";
    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 25) bmiCategory = "Normal";
    else if (bmi < 30) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    // ✅ Ideal Weight
    const idealWeight = (22 * h * h).toFixed(2);

    // ✅ BMR
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // ✅ TDEE (Activity-based)
    const maintenanceCalories = Math.round(bmr * activity);

    // ✅ Deficit
    const deficitCalories = maintenanceCalories - 500;

    // ✅ Weight loss estimation
    const weeklyLoss = 0.5; // kg
    const estimatedDays = 30; // simple estimate

    // ✅ Meal Plan
    let mealPlan;

    if (deficitCalories <= 1500) {
      mealPlan = {
        breakfast: "2 boiled eggs + green tea",
        lunch: "1 roti + chicken curry + salad",
        dinner: "dal + salad"
      };
    } else if (deficitCalories <= 2000) {
      mealPlan = {
        breakfast: "oats + milk + banana",
        lunch: "2 roti + chicken + vegetables",
        dinner: "grilled chicken + salad"
      };
    } else {
      mealPlan = {
        breakfast: "paratha + omelette",
        lunch: "rice + chicken + salad",
        dinner: "chicken + roti + yogurt"
      };
    }

    return res.json({
      success: true,
      data: {
        bmi,
        bmiCategory,
        idealWeight,
        maintenanceCalories,
        deficitCalories,
        estimatedDays,
        mealPlan
      }
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};