import express from "express"
import { ServerConfig, logger } from "./config";
import apiRoutes from "./routes"
const app = express()
import { AirplaneController } from "./controllers";


// ✅ Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", apiRoutes)

app.listen(ServerConfig.PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${ServerConfig.PORT}`);
    // console.log(AirplaneService);
    // console.log({AirplaneController});

    // logger.info("Successfully started the server", "root", {})
})
