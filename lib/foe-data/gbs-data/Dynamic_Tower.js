import ages from "../ages";
const ageCost = require("../ages-cost/Tomorrow");

export default {
  key: "Dynamic_Tower",
  age: ages.Tomorrow.key,
  levels: ageCost,
};
