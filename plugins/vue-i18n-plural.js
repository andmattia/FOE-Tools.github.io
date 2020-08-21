/* eslint-disable no-extra-semi */
export default {
  ar: function (n) {
    const rv = n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    return Number(rv);
  },
  cs: function (n) {
    const rv = n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    return Number(rv);
  },
  da: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  de: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  el: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  en: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  es: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  fi: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  fr: function (n) {
    const rv = n > 1;
    return Number(rv);
  },
  hu: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  it: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  nl: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  no: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  pl: function (n) {
    const rv = n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    return Number(rv);
  },
  "pt-BR": function (n) {
    const rv = n > 1;
    return Number(rv);
  },
  pt: function (n) {
    const rv = n > 1;
    return Number(rv);
  },
  ro: function (n) {
    const rv = n == 1 ? 0 : n == 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2;
    return Number(rv);
  },
  ru: function (n) {
    const rv = n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    return Number(rv);
  },
  sk: function (n) {
    const rv = n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    return Number(rv);
  },
  sv: function (n) {
    const rv = n != 1;
    return Number(rv);
  },
  th: function (n) {
    const rv = 0;
    return Number(rv);
  },
  tr: function (n) {
    const rv = n > 1;
    return Number(rv);
  },
};
