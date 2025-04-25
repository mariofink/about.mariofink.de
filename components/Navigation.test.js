import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

/**
 * Needed because the navigation renders NavItems,
 * which use the Link component, which require the next/router
 */
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Navigation", () => {
  it("renders", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
