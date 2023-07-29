import React from "react";

const FeatureCard = ({ category }) => {
  console.log(category);
  return (
    <div className="group hover:shadow-lg flex rounded-sm lg:rounded-md">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl ">{category.icon}</h2>
          <p className="group-hover:text-primary lg:text-2xl">
            {category.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
