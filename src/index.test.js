import { echo } from ".";

test("happy path", () => {
  expect(echo("123")).toBe("123");
});
