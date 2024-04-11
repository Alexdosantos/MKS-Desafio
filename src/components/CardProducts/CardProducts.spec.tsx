import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CardProducts from "./CardProducts";

describe("CardProducts component", () => {
  const mockProps = {
    urlImage: "/path/to/image.png",
    name: "Product Name",
    price: "$10.00",
    description: "Product Description",
    onclick: jest.fn(),
  };

  it("renders product details correctly", () => {
    const { getByText } = render(<CardProducts {...mockProps} />);
    const nameElement = getByText(mockProps.name);
    const priceElement = getByText(mockProps.price);
    const descriptionElement = getByText(mockProps.description);
    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("calls onclick function when button is clicked", () => {
    const { getByText } = render(<CardProducts {...mockProps} />);
    const button = getByText("COMPRAR");
    fireEvent.click(button);
    expect(mockProps.onclick).toHaveBeenCalled();
  });
});
