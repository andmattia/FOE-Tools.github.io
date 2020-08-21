const moment = require("moment");
import ageData from "../ages";
const age = ageData.EarlyMiddleAges.key;

export default {
  key: "gold",
  age: age,
  building: {
    resources: {
      coins: 6000,
      supplies: 10300,
    },
    time: moment.duration({ hours: 3, minutes: 50 }),
    size: {
      length: 4,
      width: 3,
    },
    population: 340,
    connection: 1,
  },
  unrefined: null,
};
