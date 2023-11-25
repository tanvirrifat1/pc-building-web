import React from "react";
import RootLayout from "../layout/RootLayout";
import Review from "./Review";

const AllPcDetails = ({ desktop }) => {
  return (
    <div className="mt-6">
      <div className="card lg:card-side lg:shadow-2xl">
        <figure className="h-[500px] w-[800px] ">
          <img
            className="rounded-3xl w-full h-full rounded-xl"
            src={desktop.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{desktop.product_name}</h2>
          <div className="flex justify-start">
            <p className="font-semibold  bg-slate-300 rounded-3xl flex justify-center py-2">
              Price: {desktop.price} tk
            </p>
            <p className="font-semibold  bg-slate-300 rounded-3xl flex justify-center py-2">
              Stock: {desktop.status}
            </p>
          </div>
          <div className="py-2 ">
            <p className="font-semibold py-2">
              Brand: {desktop.key_features.brand}
            </p>
            <p className="font-semibold py-2">
              Specification: {desktop.key_features.specification}
            </p>
            <p className="font-semibold py-2">
              Port: {desktop.key_features.specification}
            </p>
            <p className="font-semibold py-2">
              Model: {desktop.key_features.model}
            </p>
            <p className="font-semibold py-2">
              brand: {desktop.key_features.brand}
            </p>
            <p className="font-semibold py-2">
              rating: {desktop.key_features.voltage}
            </p>
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

      <h1 className="text-4xl mt-10">Review:</h1>
      <div className="bg-slate-300 rounded-lg ">
        {desktop?.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllPcDetails;

AllPcDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-server-jade.vercel.app/product/${params?.allPcId}`
  );
  const data = await res.json();
  return {
    props: {
      desktop: data,
    },
  };
};
