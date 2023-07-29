import Link from "next/link";
import React from "react";

const AllPC = ({ allPC }) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center m-2">Features Category</h1>
        <h3 className="text-2xl text-center m-2">
          Get your product from the category
        </h3>
      </div>
      <div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {allPC?.data.map((pc) => (
            <div key={pc.id} className="card  bg-base-100 shadow-xl">
              <figure>
                <img className="w-[100%] h-72" src={pc.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pc.category}</h2>
                <p>{pc.product_name}</p>
                <div className="card-actions justify-end">
                  <Link
                    className="btn btn-outline text-black w-full"
                    href={`/allPc/${pc._id}`}
                  >
                    <button>Read more</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPC;
