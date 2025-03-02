import { AirplaneController } from "../../controllers"; // Ensure this is correct
import express from "express";

const router = express.Router();

// ✅ FIX: Ensure proper function execution
router.post('/',AirplaneController.createAirplane);

export default router;
