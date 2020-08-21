import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/remark/Remark";
import { getView } from "../localVue";

const factory = (md = undefined) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      markdown: md ? md : "",
    },
    localVue,
    store,
  });
};

describe("Remark", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });

  test("Valid value", () => {
    const wrapper = factory("# Hello World :tada:");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted()["md-update"][0][0]).toMatchSnapshot();
    });
  });

  test("Update markdown", () => {
    const wrapper = factory();
    expect(wrapper.html()).toEqual("<div></div>");
    wrapper.setProps({ markdown: "# Hello World :tada:" });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
