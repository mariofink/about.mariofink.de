import React from "react";
import { render } from "@testing-library/react";
import NavItem from "./NavItem";

/**
 * Needed because the Link component requires next/router
 */
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("NavItem", () => {
  it("renders", () => {
    const { container } = render(<NavItem caption="my caption" href="/" />);
    expect(container).toMatchSnapshot();
  });
});
