import React from "react";

const CategoryCard = ({ card }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="w-full h-60 rounded-xl">
        <img src={card.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl"> {card.product_name}</h2>
        <h2 className="card-title"> {card.category}</h2>
        <div>
          <p>{card.status}</p>
          <p>{card.price}</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
