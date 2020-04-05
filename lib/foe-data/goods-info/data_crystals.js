const moment = require("moment");
import ageData from "../ages";
const age = ageData.VirtualFuture.key;

export default {
  key: "data_crystals",
  age: age,
  building: {
    resources: {
      coins: 390000,
      supplies: 837000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 6,
      width: 5
    },
    population: 5640,
    connection: 2
  },
  unrefined: "superconductors"
};
