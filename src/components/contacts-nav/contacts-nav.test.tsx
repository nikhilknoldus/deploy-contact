import React from "react";
import { shallow } from "enzyme";
import ContactNav from "./contacts-nav.component";
import { findByTestAttr } from "../../../utils/testUtils";

const setUp = () => {
  const wrapper = shallow(<ContactNav />);
  return wrapper;
};

describe("ContactList TestCases", () => {
  let wrapper: any = null;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render without any error", () => {
    let component = findByTestAttr(wrapper, "contactListComponent");
    expect(component.length).toBe(1);
  });

  it("Should render HomePage Link", () => {
    let component = findByTestAttr(wrapper, "navLink1");
    expect(component.props().to).toBe("/");
  });
  it("Should render Favourite Link", () => {
    let component = findByTestAttr(wrapper, "navLink2");
    expect(component.props().to).toBe("/favourite");
  });
  it("Should render Create Form Link", () => {
    let component = findByTestAttr(wrapper, "navLink3");
    expect(component.props().to).toBe("/create");
  });
});
