import React from "react";

const SingleProduct = ({ card }) => {
  console.log(card);
  return (
    // <div className="max-w-md p-8 w-full flex justify-center sm:flex sm:space-x-6">
    //   <div className="avatar">
    //     <div className="w-full h-60 rounded">
    //       <img src={card.image} />
    //     </div>
    //   </div>

    //   <div>
    //     <h2 className="text-2xl font-semibold">{card.product_name}</h2>
    //     <div>
    //       <p className="text-xl">Rating: {card.average_rating}</p>
    //       <p className="text-xl">Status: {card.status}</p>
    //       <p className="text-xl">Status: {card.category}</p>
    //     </div>
    //   </div>
    //   </div>
    <div>
      <div className="hero flex justify-center">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={card.image}
            className="max-w-sm w-80 h-80 rounded-lg shadow-2xl"
          />

          <div>
            <h2 className="text-2xl font-semibold">{card.product_name}</h2>
            <div>
              <p className="text-xl">Rating: {card.average_rating}</p>
              <p className="text-xl">Status: {card.status}</p>
              <p className="text-xl">Status: {card.category}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl">Price: {card.price}tk</p>

              <button className="btn btn-outline mt-2 text-black w-full">
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
