import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardPrice from "./CardPrice";

describe("CardPrice component", () => {
  it("renders the correct name", () => {
    const name = "Product Name";
    const { getByText } = render(<CardPrice name={name} />);
    const nameElement = getByText(name);
    expect(nameElement).toBeInTheDocument();
  });
});
