import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;

const servers = [
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
];

const doc = {
  info: {
    title: "testing api",
    description: "testing Description",
    // version: '',
  },
  servers: servers,
  components: {
    parameters: {
      start: { in: "query", type: "number", name: "start" },
      size: { in: "query", type: "number", name: "size" },
      sort_by: { in: "query", type: "string", name: "sort_by" },
    },
    schemas: {
      itemCategory: {
        name: "string",
        price: {
          amount: "number",
          currency: "string",
        },
        features: ["string"],
        type: "string",
      },
    },
  },
};

const outputFile = "./docs/index.json";
const routes = ["./app.ts"];

swaggerAutogen({
  openapi: "3.1.0",
})(outputFile, routes, doc);
