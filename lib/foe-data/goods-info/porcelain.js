const moment = require("moment");
import ageData from "../ages";
const age = ageData.ColonialAge.key;

export default {
  key: "porcelain",
  age: age,
  building: {
    resources: {
      coins: 37000,
      supplies: 79000
    },
    time: moment.duration({ hours: 13, minutes: 30 }),
    size: {
      length: 4,
      width: 4
    },
    population: 720,
    connection: 1
  },
  unrefined: null
};
