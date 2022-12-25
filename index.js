import express from "express";
import { dbConnection } from "./database/db.js";
import bodyParser from "body-parser";
import { apiRequestLimiter } from "./middleware/apiRateLimiter.js";
import { CONFIG } from "./config/config.js";
import { generateSnowflakeId } from "./utils/unique-id-generator.js";
import { generateHashPassword } from "./middleware/hash-password.js";

dbConnection();
const app = express();
const PORT = CONFIG.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRequestLimiter);

app.get("/", (req, res) => {
  const uuid = generateSnowflakeId();
  const hashPassword = generateHashPassword();
  res.send({ uuid, hashPassword });
});

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
