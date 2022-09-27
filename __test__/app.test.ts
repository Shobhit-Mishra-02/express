import app from "../app";
import request from "supertest";

describe("Test app.ts", () => {
  test("GET /", async () => {
    const res = await request(app).get("/");

    expect(res.body).toEqual({ message: "Hi" });
  });
});
