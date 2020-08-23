import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/campaign-cost/CampaignCost";
import { getView } from "../localVue";
import ages from "../../../lib/foe-data/ages";
import { getDefaultStore } from "../utils";
import * as campaignCost from "~/lib/foe-data/campaign-cost.js";

const factory = () => {
  const { localVue, store } = getView({ ...getDefaultStore(), campaignCost });
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
  });
};

/*
 * This test is skip in prod and should be tested individually in local due to "heap out of memory".
 */
describe.skip("CampaignCost", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Change "currentAge" value', () => {
    const wrapper = factory();
    const value = ages.IronAge.key;
    expect(wrapper.vm.currentAge).toBe(ages.BronzeAge.key);
    wrapper.vm.currentAge = value;
    expect(wrapper.vm.currentAge).toBe(value);
    expect(wrapper.vm.errors.currentAge).toBe(false);
  });

  test('Change "currentAge" invalid value', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.currentAge).toBe(ages.BronzeAge.key);
    wrapper.vm.currentAge = value;
    expect(wrapper.vm.currentAge).toBe(value);
    expect(wrapper.vm.errors.currentAge).toBe(true);
  });

  test('Change "province" value', () => {
    const wrapper = factory();
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const value = provinces[Object.keys(provinces)[1]];

    expect(wrapper.vm.province).toBe(provinces[Object.keys(provinces)[0]]);
    wrapper.vm.province = value;
    expect(wrapper.vm.province).toBe(value);
    expect(wrapper.vm.errors.province).toBe(false);
  });

  test('Change "province" invalid value', () => {
    const wrapper = factory();
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const value = "foo";

    expect(wrapper.vm.province).toBe(provinces[Object.keys(provinces)[0]]);
    wrapper.vm.province = value;
    expect(wrapper.vm.province).toBe(value);
    expect(wrapper.vm.errors.province).toBe(true);
  });

  test('Call "campaignConquired"', () => {
    const wrapper = factory();
    const provinces = wrapper.vm.sortProvinceArray(wrapper.vm.campaignCost, wrapper.vm.currentAge);
    const index = 0;
    const value = true;
    wrapper.vm.province = provinces[Object.keys(provinces)[1]];

    expect(wrapper.vm.campaignConquired[wrapper.vm.currentAge][wrapper.vm.province.key].sectors[index]).toBe(false);
    wrapper.vm.switchConquired({ age: wrapper.vm.currentAge, province: wrapper.vm.province.key, sector: index }, value);
    expect(wrapper.vm.campaignConquired[wrapper.vm.currentAge][wrapper.vm.province.key].sectors[index]).toBe(value);
  });
});
