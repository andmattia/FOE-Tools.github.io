const i18nPrefix = "routes.about.";

export default {
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
      cookiesData: [{ name: "cookieDisclaimerDisplayed" }, { name: "locale" }]
    };
  }
};
