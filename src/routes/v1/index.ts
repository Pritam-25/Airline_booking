import express from "express";
import { InfoController } from "../../controllers";  // ✅ Importing default export

const router = express.Router();

import airplaneRoutes from "./airplane-routes";
router.use('/airplanes', airplaneRoutes)

router.get("/info", InfoController);

export default router;
