const moment = require("moment");
import ageData from "../ages";
const age = ageData.IronAge.key;

export default {
  key: "cloth",
  age: age,
  building: {
    resources: {
      coins: 1500,
      supplies: 2400,
    },
    time: moment.duration({ hours: 1, minutes: 30 }),
    size: {
      length: 4,
      width: 3,
    },
    population: 230,
    connection: 1,
  },
  unrefined: null,
};
