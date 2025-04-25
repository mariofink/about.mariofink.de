import React from "react";
import { render } from "@testing-library/react";
import TabularEntry from "./TabularEntry";

describe("TabularEntry", () => {
  it("renders", () => {
    const { container } = render(
      <TabularEntry term="My Term">My description</TabularEntry>
    );
    expect(container).toMatchSnapshot();
  });
});
