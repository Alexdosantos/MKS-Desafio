import { render } from "@testing-library/react";
import  '@testing-library/jest-dom'
import ButtonFinish from "./ButtonFinish";

describe("ButtonFinish component", () => {
  it("renders with the correct name", () => {
    const { getByText } = render(<ButtonFinish name="Finish" />);
    expect(getByText("Finish")).toBeInTheDocument()
  });
});
