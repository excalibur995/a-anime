import { render } from "@testing-library/react";
import { usePathname } from "next/navigation";
import Header from "..";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header component", () => {
  it("renders the header component", () => {
    usePathname.mockReturnValue("/");

    const { getByAltText, getByRole } = render(<Header />);

    const logo = getByAltText("logo");
    expect(logo).toBeInTheDocument();

    const link = getByRole("link", { name: /logo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
