import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./docs/index.json";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const DatabaseUrl = process.env.DATABASE_URL;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("*", (req, res, next) => {
  res.status(404);
  next(new Error("page not found"));
});
app.use(errorHandler);

mongoose
  .connect(`${DatabaseUrl}`)
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(`Database Error`, err);
  });

export default app;
