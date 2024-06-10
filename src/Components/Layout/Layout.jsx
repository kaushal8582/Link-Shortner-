import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="p-6 min-h-[100vh] flex flex-col justify-between ">
        <div className=" min-h-[100vh]">
          <Nav />
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
