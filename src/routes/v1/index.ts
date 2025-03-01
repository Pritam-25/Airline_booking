import express from "express";
import InfoController from "../../controllers";  // ✅ Importing default export

const router = express.Router();

router.get("/info", InfoController);

export default router;
