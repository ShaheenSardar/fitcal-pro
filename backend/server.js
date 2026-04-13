const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const healthRoutes = require("./routes/healthRoutes");
app.use("/api/v1/health", healthRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("FitCal Pro API is running...");
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});