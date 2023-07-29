import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <div
        style={{
          padding: "0 24px",
          minHeight: "80vh",
        }}
      >
        {children}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
