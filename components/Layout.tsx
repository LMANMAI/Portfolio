import React from "react";
import { Header, Footer } from "./";
import { LayoutContainer } from "../assets";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
