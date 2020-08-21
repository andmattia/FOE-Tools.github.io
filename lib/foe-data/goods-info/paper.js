const moment = require("moment");
import ageData from "../ages";
const age = ageData.ColonialAge.key;

export default {
  key: "paper",
  age: age,
  building: {
    resources: {
      coins: 37000,
      supplies: 79000,
    },
    time: moment.duration({ hours: 13, minutes: 30 }),
    size: {
      length: 2,
      width: 3,
    },
    population: 720,
    connection: 1,
  },
  unrefined: null,
};
