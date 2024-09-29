import React from "react";
import { Footer, Header } from "../../utils/Route";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <h1>Hotel Booking Project By GorkCoder</h1>
    </>
  );
};
