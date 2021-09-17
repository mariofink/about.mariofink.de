import React from "react";
import renderer from "react-test-renderer";
import Heading from "./Heading";

describe("Heading", () => {
  it("renders the main page heading", () => {
    const tree = renderer.create(<Heading>My Heading</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
