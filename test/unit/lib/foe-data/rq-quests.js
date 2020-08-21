import rqQuests from "../../../../lib/foe-data/rq-quests";

// For coverage
describe("RQ Quests", function () {
  test("Valid value", () => {
    expect(rqQuests).toBeTruthy();
  });
});
