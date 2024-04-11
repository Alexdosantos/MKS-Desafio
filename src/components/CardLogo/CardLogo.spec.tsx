import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardLogo from "./CardLogo";

describe("CardLogo component", () => {
  it("renders the logo text correctly", () => {
    const { getByText } = render(<CardLogo />);
    const logoText = getByText("MKS");
    expect(logoText).toBeInTheDocument();
  });

  it("renders the system text correctly", () => {
    const { getByText } = render(<CardLogo />);
    const systemText = getByText("Sistemas");
    expect(systemText).toBeInTheDocument();
  });
});
