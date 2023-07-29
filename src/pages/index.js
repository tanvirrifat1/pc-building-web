import Image from "next/image";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Slider from "@/components/shared/Slider";
import Head from "next/head";
import AllPC from "@/components/shared/UI/AllPC";
import Features from "@/components/shared/Features/Features";

const home = ({ allPC }) => {
  return (
    <div>
      <Head>
        <title>PC-Store</title>
      </Head>
      <Navbar />
      <Slider />
      <Features />

      <AllPC allPC={allPC} />

      <Footer />
    </div>
  );
};

export default home;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/allPc");
  const data = await res.json();

  return {
    props: {
      allPC: data,
    },
  };
};
