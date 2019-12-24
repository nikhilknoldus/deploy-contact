import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";
import { findByTestAttr } from "../../../../utils/testUtils";

const setUp = (props: any = {}) => {
  const wrapper = shallow(<CustomButton {...props} />);
  return wrapper;
};

describe("CustomButton TestCases", () => {
  describe("Have Props", () => {
    let wrapper: any;
    let mockFunc: any;
    beforeEach(() => {
      mockFunc = jest.fn();
      let props = {
        curved: true,
        margined: true,
        buttonType: true,
        emitEvent: mockFunc,
        children: "button"
      };
      wrapper = setUp(props);
    });

    it("Should render without error", () => {
      const component = findByTestAttr(wrapper, "customButton");
      expect(component.length).toBe(1);
    });

    it("Should be clickable button", () => {
      const component = findByTestAttr(wrapper, "customButton");
      component.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    it("Should have children attribute", () => {
      const component = findByTestAttr(wrapper, "customButton");
      expect(component.childAt(0).props()).toStrictEqual({});
    });
  });

  describe("Have No Props", () => {
    let wrapper: any;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should render with message", () => {
      const component = findByTestAttr(wrapper, "customButton");
      expect(component.length).toBe(0);
    });
  });
});
