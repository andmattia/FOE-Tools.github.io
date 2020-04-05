import * as gbs from "../../../../lib/foe-data/gbs";

/**
 * Generate expected values for level costs (from level 10 to infinity)
 * @param costLevel10 {number} Cost of level 10
 * @param endLevel {number} Last level to generate
 * @returns {*[]} Return an array of integer that contains the level cost of each level from 10 to endLevel
 */
function generateExpectedValues(costLevel10, endLevel) {
  const result = [costLevel10];
  const tmp = [costLevel10];

  for (let i = 1; i < endLevel - 9; i++) {
    tmp[i] = 1.025 * tmp[i - 1];
    result[i] = Math.ceil(tmp[i]);
  }

  return result.slice(1);
}

describe("GB Data", () => {
  for (let value in gbs.agesCost) {
    describe(`${value}`, () => {
      let gbCost = [
        ...gbs.agesCost[value]
          .filter((_, i) => {
            return i < 10;
          })
          .map(obj => {
            return obj.cost;
          }),
        ...generateExpectedValues(gbs.agesCost[value][9].cost, gbs.agesCost[value].length)
      ];

      for (let i = 0; i < gbs.agesCost[value].length; i++) {
        test(`cost of level ${i} should be: ${gbCost[i]}`, () => {
          expect(gbs.agesCost[value][i].cost).toBe(gbCost[i]);
        });
      }
    });
  }
});
