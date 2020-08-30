const i18nPrefix = "components.site_layout.day_night";
const dayStartHour = 7;
const dayStartMinutes = 0;
const nightStartHour = 18;
const nightStartMinutes = 30;

export default {
  data() {
    let dS, nS;
    const regexTime = /([0-9]{2}):([0-9]{2})/;
    const cookieDayStart = this.$store.get("global/dayStart");
    const cookieNightStart = this.$store.get("global/dayStart");
    dS = new Date();
    if (cookieDayStart && regexTime.test(cookieDayStart)) {
      const match = regexTime.exec(cookieDayStart);
      dS.setUTCHours(parseInt(match[1]) - 1);
      dS.setUTCMinutes(match[2]);
    } else {
      dS.setUTCHours(dayStartHour);
      dS.setUTCMinutes(dayStartMinutes);

      this.$store.set("global/dayStart", this.$moment(dS).format("HH:mm"));
    }

    nS = new Date();
    if (cookieNightStart && regexTime.test(cookieNightStart)) {
      const match = regexTime.exec(cookieNightStart);
      nS.setUTCHours(parseInt(match[1]) - 1);
      nS.setUTCMinutes(match[2]);
    } else {
      nS.setUTCHours(nightStartHour);
      nS.setUTCMinutes(nightStartMinutes);
      this.$store.set("global/nightStart", this.$moment(nS).format("HH:mm"));
    }

    return {
      i18nPrefix: i18nPrefix,
      dayStart: dS,
      nightStart: nS,
    };
  },
  computed: {
    defaultDayStart: /* istanbul ignore next */ function () {
      return this.$moment().hour(8).minute(0).toDate();
    },
    defaultNightStart: /* istanbul ignore next */ function () {
      return this.$moment().hour(19).minute(30).toDate();
    },
  },
  watch: {
    dayStart(val) {
      this.$store.set("global/dayStart", this.$moment(val || this.defaultDayStart).format("HH:mm"));
      this.$emit("dayStartChange");
    },
    nightStart(val) {
      this.$store.set("global/nightStart", this.$moment(val || this.defaultNightStart).format("HH:mm"));
      this.$emit("nightStartChange");
    },
  },
  methods: {
    resetNightDay() {
      const dS = new Date();
      dS.setUTCHours(7);
      dS.setUTCMinutes(0);
      const nS = new Date();
      nS.setUTCHours(18);
      nS.setUTCMinutes(30);
      this.dayStart = dS;
      this.nightStart = nS;
    },
  },
};
