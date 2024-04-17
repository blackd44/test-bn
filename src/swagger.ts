import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;

const doc = {
  info: {
    title: "testing api",
    description: "testing Description",
    // version: '',
  },
  servers: [
    {
      url: `http://localhost:${port}`,
    },
    // {
    //   url: `http://{instance}:{port}`,
    //   variables: {
    //     instance: {
    //       default: "localhost",
    //     },
    //     port: {
    //       enum: [port],
    //       default: port,
    //     },
    //   },
    // },
  ],
};

const outputFile = "./docs/index.json";
const routes = ["./app.ts"];

swaggerAutogen({
  openapi: "3.1.0",
})(outputFile, routes, doc);
