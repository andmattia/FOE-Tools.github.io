const moment = require("moment");
import ageData from "../ages";
const age = ageData.HighMiddleAges.key;

export default {
  key: "rope",
  age: age,
  building: {
    resources: {
      coins: 14000,
      supplies: 27000,
    },
    time: moment.duration({ hours: 7, minutes: 30 }),
    size: {
      length: 3,
      width: 2,
    },
    population: 460,
    connection: 1,
  },
  unrefined: null,
};
