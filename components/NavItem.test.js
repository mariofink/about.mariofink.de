import React from "react";
import renderer from "react-test-renderer";
import NavItem from "./NavItem";

/**
 * Needed because the Link component requires next/router
 */
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("NavItem", () => {
  it("renders", () => {
    const tree = renderer
      .create(<NavItem caption="my caption" href="/" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
