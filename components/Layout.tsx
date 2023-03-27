import React from "react";
import { Header } from "./";
import { LayoutContainer } from "../assets";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
