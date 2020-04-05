const moment = require("moment");
import ageData from "../ages";
const age = ageData.IndustrialAge.key;

export default {
  key: "coke",
  age: age,
  building: {
    resources: {
      coins: 45000,
      supplies: 102000
    },
    time: moment.duration({ hours: 14, minutes: 30 }),
    size: {
      length: 4,
      width: 5
    },
    population: 1020,
    connection: 1
  },
  unrefined: null
};
