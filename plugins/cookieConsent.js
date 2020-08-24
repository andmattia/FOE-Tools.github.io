import Vue from "vue";
import cookieConsent from "orejime/dist/orejime";
import CookieConsentImage from "~/assets/cookie-consent.svg?data";


export default async ({ app, store }) => {
  Vue.mixin({
    created() {
      const translations = {};
      translations[app.$clone(store.get("i18n/locale")) || "en"] = {
        consentNotice: {
          learnMore: app.i18n.t("cookieConsent.consentNotice.learnMore")
        },
        matomo: {
          title: "foo",
          description: app.i18n.t("cookieConsent.matomo.description"),
        },
        purposes: {
          analytics: app.i18n.t("cookieConsent.purposes.analytics"),
          necessary: app.i18n.t("cookieConsent.purposes.necessary")
        }
      };
      let result = cookieConsent.init({
        logo: CookieConsentImage,
        elementID: "cookieConsent",
        cookieName: "cookieConsent",
        privacyPolicy: `https://${process.env.prodUrl}/privacy-policy`,
        lang: app.$clone(store.get("i18n/locale")) || "en",
        translations,
        apps: [
          {
            // Each app should have a unique (and short) name.
            name: 'matomo',

            // If "default" is set to true, the app will be enabled by default
            // Overwrites global "default" setting.
            // We recommend leaving this to "false" for apps that collect
            // personal information.
            default: true,

            // The title of you app as listed in the consent modal.
            title: 'Matomo',

            // The purpose(s) of this app. Will be listed on the consent notice.
            // Do not forget to add translations for all purposes you list here.
            purposes: ['analytics'],

            // A list of regex expressions or strings giving the names of
            // cookies set by this app. If the user withdraws consent for a
            // given app, Klaro will then automatically delete all matching
            // cookies.
            cookies: [
              // you can also explicitly provide a path and a domain for
              // a given cookie. This is necessary if you have apps that
              // set cookies for a path that is not "/" or a domain that
              // is not the current domain. If you do not set these values
              // properly, the cookie can't be deleted by Klaro
              // (there is no way to access the path or domain of a cookie in JS)
              [/^_pk_.*$/, '/', location.hostname], //for the production version
              [/^_pk_.*$/, '/', 'localhost'], //for the local version
              'piwik_ignore',
            ],

            // An optional callback function that will be called each time
            // the consent state for the app changes (true=consented). Passes
            // the `app` config as the second parameter as well.
            callback: function(consent, app) {
              // This is an example callback function.
            },

            // If "required" is set to true, Klaro will not allow this app to
            // be disabled by the user.
            required: false,

            // If "optOut" is set to true, Klaro will load this app even before
            // the user gave explicit consent.
            // We recommend always leaving this "false".
            optOut: false,

            // If "onlyOnce" is set to true, the app will only be executed
            // once regardless how often the user toggles it on and off.
            onlyOnce: true,
          },
          {
            name: "always-on",
            title: "FOE-Tools",
            purposes: ["necessary"],
            required: true
          }
        ]
      });

      Vue.prototype.$cookieConsent = result;

      try {
        document.querySelector("#cookieConsent > div.orejime-AppContainer > div > div > div").setAttribute("data-title", app.i18n.t("cookieConsent.title"));
      } catch (e) {
        // Nothing to do, this case occur most probably because the user has already set his preferences.
      }
    }
  })
};
