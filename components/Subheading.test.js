import React from "react";
import { render } from "@testing-library/react";
import Subheading from "./Subheading";

describe("Subheading", () => {
  it("renders", () => {
    const { container } = render(<Subheading>My Subheading</Subheading>);
    expect(container).toMatchSnapshot();
  });
});
