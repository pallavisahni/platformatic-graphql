import { test, expect } from 'vitest';
import { getServer } from "../helper.js";

test("root", async (t) => {
  const server = await getServer(t);
  const res = await server.inject({
    method: "GET",
    url: "/dummy-service",
  });

  expect(res.statusCode).toBe(200);
  expect(res.json()).toEqual({
    hello: "Welcome to Platformatic Dummy-service example",
  });
});
