import Link from "next/link";
import React from "react";

const PcBuildDetails = ({ category }) => {
  return (
    <div className="hero  bg-slate-300 m-6 rounded-xl flex justify-center">
      <div className="hero-content flex-col lg:flex-row">
        <Link href={`/Pc-category/${category?.category}`}>
          <div className="bg-slate-300 m-6 rounded-xl">
            <h1 className="text-6xl ">{category?.icon}</h1>
          </div>
          <div>
            <p className="py-6">{category?.category}</p>
            <button className="btn btn-outline text-black">Choice</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PcBuildDetails;
