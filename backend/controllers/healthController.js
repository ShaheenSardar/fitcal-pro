exports.calculateHealth = (req, res) => {
  try {
    let { weight, height, age, gender } = req.body;

    // Convert to numbers
    weight = Number(weight);
    height = Number(height);
    age = Number(age);

    // Validation
    if (!weight || !height || !age || !gender) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (weight <= 0 || height <= 0 || age <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid input values"
      });
    }

    // Convert height to meters
    const heightInMeters = height / 100;

    // BMI
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

    // Ideal Weight (BMI 22 standard)
    const idealWeight = (22 * (heightInMeters ** 2)).toFixed(2);

    // BMR Calculation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE (Sedentary default)
    const calories = Math.round(bmr * 1.2);

    // Calorie Deficit (for weight loss)
    const deficitCalories = calories - 500;

    return res.status(200).json({
      success: true,
      data: {
        bmi,
        idealWeight,
        maintenanceCalories: calories,
        deficitCalories
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};