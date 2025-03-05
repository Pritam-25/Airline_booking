import express from "express"
import { AirplaneMiddlewares } from "../../middlewares"
import { AirplaneController } from "../../controllers/airplane-controller"

const router = express.Router()

const middleware = AirplaneMiddlewares.validateCreateRequest

router.use("/", middleware, AirplaneController.createAirplane)

export default router