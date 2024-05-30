"use client";

import { useState } from "react";

export default function useDrawers(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const toggleDrawer = () => {
    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    setIsOpen(!isOpen);
  };
  return { isOpen, toggleDrawer, setIsOpen };
}
