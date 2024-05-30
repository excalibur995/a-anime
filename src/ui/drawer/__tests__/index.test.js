import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Drawer from "..";

describe("Drawer Component", () => {
  it("renders the Drawer button", () => {
    render(<Drawer title="Test Drawer">Drawer content</Drawer>);
    const button = screen.getByTestId("trigger");
    expect(button).toBeInTheDocument();
  });

  it("opens and closes the Drawer", () => {
    render(<Drawer title="Test Drawer">Drawer content</Drawer>);

    const button = screen.getByTestId("trigger");
    fireEvent.click(button);

    const drawerTitle = screen.getByText("Test Drawer");
    expect(drawerTitle).toBeInTheDocument();

    const drawerContent = screen.getByText("Drawer content");
    expect(drawerContent).toBeInTheDocument();
    expect(document.body).toHaveClass("overflow-hidden");

    fireEvent.click(screen.getByTestId("close-button"));
    expect(document.body).not.toHaveClass("overflow-hidden");
  });

  it("toggles the overflow-hidden class on body", () => {
    render(<Drawer title="Test Drawer">Drawer content</Drawer>);

    const button = screen.getByTestId("trigger");
    fireEvent.click(button);

    expect(document.body).toHaveClass("overflow-hidden");

    fireEvent.click(screen.getByTestId("close-button"));
    expect(document.body).not.toHaveClass("overflow-hidden");
  });
});
