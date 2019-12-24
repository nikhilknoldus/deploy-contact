import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../utils/testUtils";
import { ContactReducer } from "./store/reducer";

function testStore() {
  const INITIAL_STATE: any = [{
    name: "Slava Olenin",
    phone: "6566666007",
    email: "slava@fm.com",
    favourite: false
  },
  {
    name: "Jaye Tan",
    phone: "6760984756",
    email: "jaye@fm.com",
    favourite: false
  },
  {
    name: "Sangwon Park",
    phone: "6555555007",
    email: "park@fm.com",
    favourite: false
  },
  {
    name: "Brett Webb",
    phone: "6500000007",
    email: "brett@fm.com",
    favourite: false
  },
  {
    name: "Jisum Suh",
    phone: "6590909090",
    email: "jisun@gmail.com",
    favourite: false
  },
  {
    name: "Keynes Yeo",
    phone: "5550909876",
    email: "yeo@fm.com",
    favourite: false
  },
  {
    name: "Emmmy Jolly",
    phone: "9999076561",
    email: "emmmy@gmail.com",
    favourite: false
  },
  {
    name: "Harry Gill",
    phone: "7888342920",
    email: "harry@gmail.com",
    favourite: false
  }
  ];
  return INITIAL_STATE;
}

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

describe("App Component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render without error", () => {
    const component = findByTestAttr(wrapper, "AppComponent");
    expect(component.length).toBe(1);
  });

  it("Should render with provider", () => {
    const contactData = testStore();
    const component = findByTestAttr(wrapper, "AppContactProvider");
    expect(component.props().value[0]).toEqual(contactData);
  });
});
