const moment = require("moment");
import ageData from "../ages";
const age = ageData.SpaceAgeAsteroidBelt.key;

export default {
  key: "nickel",
  age: age,
  building: {
    resources: {
      coins: 450000,
      supplies: 900000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 3,
      width: 3
    },
    population: 5640,
    connection: 2
  },
  unrefined: null
};
