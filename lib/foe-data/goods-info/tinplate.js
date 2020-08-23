const moment = require("moment");
import ageData from "../ages";
const age = ageData.ProgressiveEra.key;

export default {
  key: "tinplate",
  age: age,
  building: {
    resources: {
      coins: 54000,
      supplies: 129000,
    },
    time: moment.duration({ hours: 14, minutes: 50 }),
    size: {
      length: 3,
      width: 6,
    },
    population: 1200,
    connection: 2,
  },
  unrefined: null,
};
