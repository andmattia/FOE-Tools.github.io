import { i18next } from "../../../scripts/i18n";

describe("i18n", function () {
  describe("i18next", function () {
    test("Valid value", () => {
      const result = i18next.t("utils.moment.year", { count: 1234 });
      expect(result).toBe("1,234 years");
    });

    test('Valid value with "special" locale', () => {
      const result = i18next.t("utils.moment.year", { count: 1234, lng: "nl" });
      expect(result).toBe("1.234 jaren");
    });

    test("Valid value with unknow format", () => {
      const result = i18next.t("utils.moment.year", { count: i18next.format(1234, "uppercase") });
      expect(result).toBe("1,234 years");
    });
  });
});
