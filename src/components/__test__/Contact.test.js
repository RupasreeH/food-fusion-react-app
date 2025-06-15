import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact Us test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Should load contact us component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    expect(input).toBe(2);
  });
});
