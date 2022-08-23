import { echo } from "../echo";

test("happy path", () => {
  expect(echo("123")).toBe("123");
});
