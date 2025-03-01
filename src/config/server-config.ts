import dotenv from "dotenv";

dotenv.config();

const ServerConfig = {
  PORT: process.env.PORT || 3000,
};

export default ServerConfig;
