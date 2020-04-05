const moment = require("moment");
import ageData from "../ages";
const age = ageData.IndustrialAge.key;

export default {
  key: "rubber",
  age: age,
  building: {
    resources: {
      coins: 45000,
      supplies: 102000
    },
    time: moment.duration({ hours: 14, minutes: 30 }),
    size: {
      length: 5,
      width: 3
    },
    population: 1020,
    connection: 1
  },
  unrefined: null
};
