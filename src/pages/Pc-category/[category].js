import React from "react";
import RootLayout from "../layout/RootLayout";
import AllPcCategory from "./AllPcCategory";

const AllCategory = ({ AllFeatures }) => {
  return (
    <div>
      <AllPcCategory AllFeatures={AllFeatures} />
    </div>
  );
};

export default AllCategory;

AllCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/allPc/${params?.category}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      AllFeatures: data.data,
    },
  };
};
