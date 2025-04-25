import React from "react";
import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page", () => {
  it("renders", () => {
    const { container } = render(<Page>My Page</Page>);
    expect(container).toMatchSnapshot();
  });
});
