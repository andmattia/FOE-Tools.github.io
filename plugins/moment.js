import Vue from "vue";
import moment from "dayjs";
import duration from "dayjs/plugin/duration";
moment.extend(duration);

export default () => {
  Vue.prototype.$moment = moment;
};
