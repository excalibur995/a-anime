import TanstackProvider from "@/contexts/TanstackProvider";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A-Team Anime",
  description: "Showing you the most recommended Anime",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextUIProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
