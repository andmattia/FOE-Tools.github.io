const i18nPrefix = "routes.privacy_policy.";

export default {
  name: "PrivacyPolicy",
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    return {
      i18nPrefix,
    };
  },
};
