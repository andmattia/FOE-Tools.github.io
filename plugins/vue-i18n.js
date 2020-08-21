export default () => {
  return {
    locale: "en",
    fallbackLocale: "en",
    messages: {
      en: require("../lang/en.json"),
    },
    pluralizationRules: require("./vue-i18n-plural.js"),
  };
};
