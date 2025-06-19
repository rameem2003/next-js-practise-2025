import Navbar from "@/components/Navbar";
import { Ubuntu } from "next/font/google";
import React from "react";

interface type {
  children: React.ReactNode;
}

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700", "300"],
  variable: "--font-ubuntu",
});

const RootLayout = ({ children }: type) => {
  return (
    <div className={`${ubuntu.variable} `}>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
