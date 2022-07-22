import { echo } from "./index";

test("happy path", () => {
  expect(echo("123")).toBe("123");
});
