import React from "react";

const Review = ({ review }) => {
  console.log(review);
  return (
    <div className="m-10 py-5">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://i.ibb.co/c1bPnJs/vector-users-icon.webp" alt="" />
        </div>
      </div>
      <p className="font-semibold text-xl">User: {review.username}</p>
      <p className="font-semibold text-xl">Rating: {review.rating}</p>
      <p className="font-semibold text-xl">Comment: {review.comment}</p>
    </div>
  );
};

export default Review;
