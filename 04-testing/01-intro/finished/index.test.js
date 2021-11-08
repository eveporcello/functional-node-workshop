import { total } from "./index";

test("totaling the weight of a backpack", () => {
  const backpack = [5, 4, 2, 10, 3.6, 1.5];
  const result = total(backpack);

  expect(result).toEqual(26.1);
});
