import React from "react";

const AllPC = ({ allPC }) => {
  console.log(allPC);
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
          {allPC?.map((pc) => (
            <div key={pc.id} className="card  bg-base-100 shadow-xl">
              <figure>
                <img className="w-[100%] h-72" src={pc.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn w-full btn-primary">Buy Now</button>
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
