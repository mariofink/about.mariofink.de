import React from "react";
import renderer from "react-test-renderer";
import Subheading from "./Subheading";

describe("Subheading", () => {
  it("renders", () => {
    const tree = renderer
      .create(<Subheading>My Subheading</Subheading>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
