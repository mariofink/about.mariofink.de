import React from "react";
import renderer from "react-test-renderer";
import Navigation from "./Navigation";

/**
 * Needed because the navigation renders NavItems,
 * which use the Link component, which require the next/router
 */
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Navigation", () => {
  it("renders", () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
