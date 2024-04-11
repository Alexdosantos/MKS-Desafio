import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProductsCart from "./CardProductsCart";

describe("CardProductsCart component", () => {
  const mockProps = {
    photo: "/path/to/photo.png",
    name: "Product Name",
    quantity: 2,
    onclickDelete: jest.fn(),
    totalProductPrice: "R$20.00",
    handleDecreaseQuantity: jest.fn(),
    handleIncreaseQuantity: jest.fn(),
  };

  it("renders product details correctly", () => {
    const { getByText } = render(<CardProductsCart {...mockProps} />);
    const nameElement = getByText(mockProps.name);
    const quantityElement = getByText(/Qtd:/);
    const totalPriceElement = getByText(mockProps.totalProductPrice);

    expect(nameElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(totalPriceElement).toBeInTheDocument();
  });

  it("calls onclickDelete function when close button is clicked", () => {
    const { getByAltText } = render(<CardProductsCart {...mockProps} />);
    const closeButton = getByAltText("Close");
    fireEvent.click(closeButton);
    expect(mockProps.onclickDelete).toHaveBeenCalled();
  });

  it("calls handleDecreaseQuantity function when - button is clicked", () => {
    const { getByText } = render(<CardProductsCart {...mockProps} />);
    const minusButton = getByText("-");
    fireEvent.click(minusButton);
    expect(mockProps.handleDecreaseQuantity).toHaveBeenCalled();
  });

  it("calls handleIncreaseQuantity function when + button is clicked", () => {
    const { getByText } = render(<CardProductsCart {...mockProps} />);
    const plusButton = getByText("+");
    fireEvent.click(plusButton);
    expect(mockProps.handleIncreaseQuantity).toHaveBeenCalled();
  });
});
