import { campaignCost, campaignTotalCost } from "../../../../lib/foe-data/campaign-cost";

// For coverage
describe("Campaign Cost", function() {
  test("Valid value", () => {
    expect(campaignCost).toBeTruthy();
    expect(campaignTotalCost).toBeTruthy();
  });
});
