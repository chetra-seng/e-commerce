import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
