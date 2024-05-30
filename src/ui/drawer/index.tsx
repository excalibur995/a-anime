"use client";

import { Button } from "@nextui-org/react";
import { SlidersHorizontal, X } from "lucide-react";
import { PropsWithChildren } from "react";
import { DrawerProps } from "./models/types";

export default function Drawer({ title, children, open, toggle }: PropsWithChildren<DrawerProps>) {
  return (
    <div>
      <Button data-testid="trigger" color="primary" isIconOnly onClick={toggle}>
        <SlidersHorizontal color="white" size={16} />
      </Button>
      <div className={`fixed inset-0 z-40 ${open ? "block" : "hidden"}`} onClick={toggle}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div
        className={`fixed top-0 right-0 z-50 h-full lg:w-[18vw] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button data-testid="close-button" onClick={toggle}>
            <X className="w-6 h-6" />
          </button>
        </div>
        {open && <div className="p-4">{children}</div>}
      </div>
    </div>
  );
}
