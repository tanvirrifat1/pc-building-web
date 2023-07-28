import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const home = () => {
  return (
    <div>
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
};

export default home;
