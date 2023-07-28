import React from "react";
import RootLayout from "../layout/RootLayout";

const AllPcDetails = ({ desktop }) => {
  console.log(desktop);
  return (
    <div>
      <h1>{desktop.category}</h1>
      <h1>here us:</h1>
    </div>
  );
};

export default AllPcDetails;

AllPcDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/pc_components");
  const allPcs = await res.json();

  const paths = allPcs.map((pc) => ({
    params: { allPcId: pc.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/pc_components/${params?.allPcId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      desktop: data,
    },
  };
};
