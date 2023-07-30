import React from "react";
import SingleProduct from "./SingleProduct";

const AllPcCategory = ({ AllFeatures }) => {
  return (
    <div>
      {AllFeatures?.map((card) => (
        <SingleProduct key={card._id} card={card} />
      ))}
    </div>
  );
};

export default AllPcCategory;
