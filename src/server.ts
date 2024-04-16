import app from "./app";

const NODE_ENV = process.env.NODE_ENV;
const port = process.env.PORT;

const FgWhite = "\x1b[37m";
const activeColor = "\x1b[36m";

app.listen(port, async () => {
  console.log(
    `${FgWhite}⚡️[server: ${activeColor}${NODE_ENV}${FgWhite}]: Server is running at http://localhost:${activeColor}${port}`
  );
});
