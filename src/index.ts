import express from "express"
import {ServerConfig, logger} from "./config";
import apiRoutes from "./routes"
const app = express()


app.use("/api", apiRoutes)

app.listen(ServerConfig.PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${ServerConfig.PORT}`);
    // logger.info("Successfully started the server", "root", {})
})
