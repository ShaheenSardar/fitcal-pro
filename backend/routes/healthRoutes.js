const express = require("express");
const router = express.Router();

const { calculateHealth } = require("../controllers/healthController");

// POST: /api/v1/health/calculate
router.post("/calculate", calculateHealth);

module.exports = router;