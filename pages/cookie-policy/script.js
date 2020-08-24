const i18nPrefix = "routes.cookie_policy.";

export default {
  name: "CookiePolicy",
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    return {
      i18nPrefix,
    };
  },
};
