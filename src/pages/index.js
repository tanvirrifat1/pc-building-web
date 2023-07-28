import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Slider from "@/components/shared/Slider";
import Head from "next/head";
import AllPC from "@/components/shared/UI/AllPC";

const home = ({ allPC }) => {
  return (
    <div>
      <Head>
        <title>PC-Store</title>
        <Navbar />
        <Slider />
        <div className="ml-10">
          <AllPC allPC={allPC} />
        </div>
      </Head>
      <Footer />
    </div>
  );
};

export default home;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/pc_components");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allPC: data,
    },
  };
};
