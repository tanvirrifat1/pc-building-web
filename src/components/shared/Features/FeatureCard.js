import Link from "next/link";
import React from "react";

const FeatureCard = ({ category }) => {
  return (
    <Link href={`/product/${category.category}`}>
      <div className="group flex justify-center hover:shadow-sm  rounded-sm lg:rounded-md">
        <div className="card  w-96 bg-base-100 shadow-xl">
          <div className="w-52 h-36 flex justify-center items-center">
            <h2 className="text-4xl ">{category.icon}</h2>
            <p className="group-hover:text-primary lg:text-2xl">
              {category.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
