import React from "react";
import { shallow } from "enzyme";
import StartMenu from "./StartMenu";

describe("StartMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StartMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
