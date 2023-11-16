import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Contador";

describe("Button component", () => {
  test("renders button and counter", () => {
    render(<Counter />);
    const button = screen.getByTestId("increment-btn");
    const counter = screen.getByTestId("contador-value");
    expect(button).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
    expect(button).toHaveTextContent("Aumentar contador");
    expect(counter).toHaveTextContent("0");
  });
  test("counter increase with event", () => {
    render(<Counter />);
    const button = screen.getByTestId("increment-btn");
    const counter = screen.getByTestId("contador-value");

    fireEvent.click(button)
    expect(counter).toHaveTextContent("1");

    fireEvent.click(button)
    expect(counter).toHaveTextContent("2");
  });
});
