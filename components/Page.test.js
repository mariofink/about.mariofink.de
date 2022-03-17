import React from "react";
import renderer from "react-test-renderer";
import Page from "./Page";

describe("Page", () => {
  it("renders", () => {
    const tree = renderer.create(<Page>My Page</Page>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
