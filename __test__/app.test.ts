import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/api");
    expect(res.body).toEqual({ message: "Hello world !!" });
  });
});

describe("Testing Error handlers", () => {
  test("testing error handler", async () => {
    const res = await request(app).delete("/api/error_test_api");
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual("Error testing api");
  });

  test("testing error handler", async () => {
    const res = await request(app).delete("/api/error_test_api").send({
      status: "200",
      message: "custom error message",
    });
    expect(res.statusCode).toEqual(500);
    expect(res.body.error).toEqual("custom error message");
  });

  test("testing not found api", async () => {
    const res = await request(app).delete("/api/pagenotfoundinourapi");
    expect(res.statusCode).toEqual(404);
    expect(res.body.error).toEqual("page not found");
  });
});