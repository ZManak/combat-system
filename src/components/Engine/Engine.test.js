import React from "react";
import { shallow } from "enzyme";
import Engine from "./Engine";

describe("Engine", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Engine />);
    expect(wrapper).toMatchSnapshot();
  });
});
