import ages from "../ages";
const ageCost = require("../ages-cost/NoAge");

export default {
  key: "Observatory",
  age: ages.NoAge.key,
  levels: ageCost,
};
