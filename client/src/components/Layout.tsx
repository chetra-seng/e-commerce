import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <main className="container m-auto  px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
