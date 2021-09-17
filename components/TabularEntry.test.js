import React from "react";
import renderer from "react-test-renderer";
import TabularEntry from "./TabularEntry";

describe("Subheading", () => {
  it("renders", () => {
    const tree = renderer
      .create(<TabularEntry term="My Term">My description</TabularEntry>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
