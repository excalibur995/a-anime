"use client";

import { Button } from "@nextui-org/react";
import { SlidersHorizontal, X } from "lucide-react";
import { PropsWithChildren, useState } from "react";
import { DrawerProps } from "./models/types";

export default function Drawer({ title, children }: PropsWithChildren<DrawerProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button data-testid="trigger" color="primary" isIconOnly onClick={toggleDrawer}>
        <SlidersHorizontal color="white" size={16} />
      </Button>
      <div className={`fixed inset-0 z-40 ${isOpen ? "block" : "hidden"}`} onClick={toggleDrawer}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div
        className={`fixed top-0 right-0 z-50 h-full lg:w-[18vw] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button data-testid="close-button" onClick={toggleDrawer}>
            <X className="w-6 h-6" />
          </button>
        </div>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    </div>
  );
}
