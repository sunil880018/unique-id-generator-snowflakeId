import express from "express";
import { dbConnection } from "./database/db.js";
import bodyParser from "body-parser";
import { apiRequestLimiter } from "./middleware/apiRateLimiter.js";
import { CONFIG } from "./config/config.js";
import {
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} from "./errors/index.js";

dbConnection();
const app = express();
const PORT = CONFIG.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRequestLimiter);

app.get("/", (req, res) => {
  const unauthenticated = new UnauthenticatedError("unauthenticated error");
  const notFoundError = new NotFoundError("not found error");
  const badRequestError = new BadRequestError("badRequestError error");
  const unauthorizedError = new UnauthorizedError("UnauthorizedError error");
  const errorObj ={
    unauthenticated,
    notFoundError,
    badRequestError,
    unauthorizedError
  };
  res.send(errorObj);
});

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
