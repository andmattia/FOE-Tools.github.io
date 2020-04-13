import { special_goods } from "../../../../lib/foe-data/special_goods";

// For coverage
describe("Special goods", function() {
  test("Valid value", () => {
    expect(special_goods).toBeTruthy();
  });
});
