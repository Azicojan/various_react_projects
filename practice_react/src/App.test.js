import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Wrapper from "./App";
import Button from "./App";

describe("Wrapper Component", () => {
  test("renders children correctly", () => {
    render(
      <Wrapper toggle={true}>
        <h1>Hello, World!</h1>
      </Wrapper>
    );
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  test("applies correct background color based on toggle prop", () => {
    const { rerender, container } = render(<Wrapper toggle={true} />);

    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle("background-color: lightblue");

    // Re-render with toggle = false
    rerender(<Wrapper toggle={false} />);
    expect(wrapperDiv).toHaveStyle("background-color: lightgreen");
  });
});

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /Click me/i })
    ).toBeInTheDocument();
  });

  test("calls changeBackground function when clicked", () => {
    const mockChangeBackground = jest.fn();
    render(<Button changeBackground={mockChangeBackground}>Click me</Button>);
    fireEvent.click(screen.getByRole("button", { name: /Click me/i }));
    expect(mockChangeBackground).toHaveBeenCalledTimes(1);
  });
});

describe("App Component", () => {
  test("renders the App with initial state and toggles background on button click", () => {
    render(<App />);

    // Initial state
    const wrapperDiv = screen.getByText("Hello, World!").parentElement;
    expect(wrapperDiv).toHaveStyle("background-color: lightblue");

    const toggleButton = screen.getByRole("button", { name: /Click me/i });
    fireEvent.click(toggleButton);

    // Updated state
    expect(wrapperDiv).toHaveStyle("background-color: lightgreen");

    fireEvent.click(toggleButton);
    expect(wrapperDiv).toHaveStyle("background-color: lightblue");
  });
});
