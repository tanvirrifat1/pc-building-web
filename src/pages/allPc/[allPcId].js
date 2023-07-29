import React from "react";
import RootLayout from "../layout/RootLayout";

const AllPcDetails = ({ desktop }) => {
  return (
    <div className="mt-6">
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure className="h-full ">
          <img src={desktop.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name:{desktop.category}</h2>
          <div className="py-2 ">
            <p className="font-semibold py-2">Model: {desktop.product_name}</p>
            <p className="font-semibold py-2">status: {desktop.status}</p>
            <p className="font-semibold py-2">price: {desktop.price}</p>
            <p className="font-semibold py-2">
              description: {desktop.description}
            </p>
            <p className="font-semibold py-2">
              brand: {desktop.key_features.brand}
            </p>
            <p className="font-semibold py-2">
              rating: {desktop.average_rating}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
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
  console.log(params);
  const res = await fetch(`http://localhost:5000/product/${params?.allPcId}`);
  const data = await res.json();
  return {
    props: {
      desktop: data,
    },
  };
};
