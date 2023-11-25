import React from "react";
import RootLayout from "../layout/RootLayout";
import AllCategoryDetails from "./AllCategoryDetails";

const CategoryDetails = ({ allCard }) => {
  // console.log(allCard);
  return (
    <div className="flex justify-center">
      <AllCategoryDetails allCard={allCard} />
    </div>
  );
};

export default CategoryDetails;

CategoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/allPc/${params?.category}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allCard: data.data,
    },
  };
};
