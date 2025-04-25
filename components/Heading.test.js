import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
  it("renders the main page heading", () => {
    render(<Heading>My Heading</Heading>);
    const headingElement = screen.getByText("My Heading");
    expect(headingElement).toBeInTheDocument();
  });
});
