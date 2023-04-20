import React from "react";
import { shallow } from "enzyme";
import Ending from "./Ending";

describe("Ending", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ending />);
    expect(wrapper).toMatchSnapshot();
  });
});
