import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardCountCart from "./CardCountCart";

describe("CardCountCart component", () => {
  it("renders the card with correct quantity", () => {
    const onClickMock = jest.fn();
    const quantityCart = 5;
    const { getByText } = render(
      <CardCountCart onclick={onClickMock} quantityCart={quantityCart} />
    );
    const quantityElement = getByText(quantityCart.toString());
    expect(quantityElement).toBeInTheDocument();
  });

  it("calls onclick function when clicked", () => {
    const onClickMock = jest.fn();
    const quantityCart = 5;
    const { getByAltText } = render(
      <CardCountCart onclick={onClickMock} quantityCart={quantityCart} />
    );
    const cardImage = getByAltText("image");
    fireEvent.click(cardImage);
    expect(onClickMock).toHaveBeenCalled();
  });
});
