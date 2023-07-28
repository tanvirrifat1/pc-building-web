import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Slider from "@/components/shared/Slider";

const home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <Footer /> */}
    </div>
  );
};

export default home;
