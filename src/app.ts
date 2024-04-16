import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);
app.use("*", (req, res, next) => {
  res.status(404);
  next(new Error("page not found"));
});
app.use(errorHandler);

export default app;
