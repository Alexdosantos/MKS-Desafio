import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonProps from "./ButtonProps";

describe("ButtonProps component", () => {
  it("renders button with correct text", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<ButtonProps onclick={onClickMock} />);
    const buttonText = getByText("COMPRAR");
    expect(buttonText).toBeInTheDocument();
  });

  it("calls onclick function when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<ButtonProps onclick={onClickMock} />);
    const button = getByText("COMPRAR");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
