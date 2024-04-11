import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/page";

jest.mock("../src/hook/useShoppingCart/useShoppingCart", () => ({
  useShoppingCart: () => ({
    cart: [],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  }),
}));

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(() => ({
    data: [
      {
        id: 1,
        name: "Product 1",
        brand: "Brand 1",
        description: "Description 1",
        photo: "/photo1.jpg",
        price: "10.00",
        createdAt: "2024-04-10",
        updatedAt: "2024-04-10",
        count: 0,
      },
      {
        id: 2,
        name: "Product 2",
        brand: "Brand 2",
        description: "Description 2",
        photo: "/photo2.jpg",
        price: "20.00",
        createdAt: "2024-04-10",
        updatedAt: "2024-04-10",
        count: 0,
      },
    ],
    isLoading: false,
  })),
}));

describe("Home Component", () => {
  test("renders loading spinner initially", async () => {
    render(<Home />);
    const loadingSpinner = screen.getByAltText("image");
    expect(loadingSpinner).toBeInTheDocument();
  });

  test("opens sidebar when cart count is clicked", async () => {
    render(<Home />);
    const countCartButton = screen.getByText("0");
    userEvent.click(countCartButton);

    // Wait for the sidebar to be rendered
    await waitFor(
      () => {
        const sidebar = screen.getByTestId("sidebar");
        expect(sidebar).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
