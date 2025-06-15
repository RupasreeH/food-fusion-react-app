import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("contact Us test cases", () => {
  test("Should load contact us component", () => {
    <BrowserRouter>
      <Provider store={appStore}>
        render(
        <Contact />
        );
      </Provider>
      ;
    </BrowserRouter>;

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Should load contact us component", () => {
    render(<Contact />);

    const input = screen.getByRole("button", { name: "Login" });
    expect(input).toBe(2);
  });
});
