import React from "react";
import CategoryCard from "./CategoryCard";

const AllCategoryDetails = ({ allCard }) => {
  // console.log(allCard);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {allCard?.map((card) => (
        <CategoryCard key={card._id} card={card} />
      ))}
    </div>
  );
};

export default AllCategoryDetails;
