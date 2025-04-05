import { formatDate } from "../src";

describe("formatDate", () => {
  test("formats date correctly", () => {
    const date = new Date("2023-01-15");
    expect(formatDate(date)).toBe("2023-01-15");
    expect(formatDate(date, "MM/DD/YYYY")).toBe("01/15/2023");
  });
});
