import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar";
import { IProduct } from "@/app/page";

describe("Sidebar component", () => {
  const mockProducts: IProduct[] = [
    {
      id: 1,
      name: "Product 1",
      photo: "/product1.jpg",
      price: "10.00",
      brand: "Brand 1",
      description: "Description 1",
      createdAt: Date(),
      updatedAt: Date(),
    },
    {
      id: 2,
      name: "Product 2",
      photo: "/product2.jpg",
      price: "15.00",
      brand: "Brand 2",
      description: "Description 2",
      createdAt: Date(),
      updatedAt: Date(),
    },
  ];

  const mockDeleteHandler = jest.fn();
  const mockCloseHandler = jest.fn();

  it("renders sidebar correctly when open", () => {
    render(
      <Sidebar
        isOpen={true}
        onclickClosed={mockCloseHandler}
        mapeamento={mockProducts}
        onclickDelete={mockDeleteHandler}
      />
    );

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByTestId("close-button")).toBeInTheDocument();
  });

  it("calculates total correctly", () => {
    render(
      <Sidebar
        isOpen={true}
        onclickClosed={mockCloseHandler}
        mapeamento={mockProducts}
        onclickDelete={mockDeleteHandler}
      />
    );

    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("R$25.00")).toBeInTheDocument();
  });

  it("calls onclickClosed when close button is clicked", () => {
    render(
      <Sidebar
        isOpen={true}
        onclickClosed={mockCloseHandler}
        mapeamento={mockProducts}
        onclickDelete={mockDeleteHandler}
      />
    );

    fireEvent.click(screen.getByTestId("close-button"));

    expect(mockCloseHandler).toHaveBeenCalled();
  });
});
