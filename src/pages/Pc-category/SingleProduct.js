import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SingleProduct = ({ card }) => {
  const { data: session } = useSession();

  const email = session?.user?.email;

  const product = { ...card, email };

  const [isAdding, setIsAdding] = useState(false);
  const router = useRouter();

  const handleAddProduct = async () => {
    setIsAdding(true);

    try {
      // console.log("Sending request with data:", card);

      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      router.push("/PcBuild");

      console.log("Sending request with data:", product);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div>
      <div className="hero flex justify-center">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={card?.image}
            className="max-w-sm w-80 h-80 rounded-lg shadow-2xl"
            alt=""
          />

          <div>
            <h2 className="text-2xl font-semibold">{card?.product_name}</h2>
            <div>
              <p className="text-xl">Rating: {card?.average_rating}</p>
              <p className="text-xl">Status: {card?.status}</p>
              <p className="text-xl">Status: {card?.category}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl">Price: {card?.price}tk</p>

              <button
                onClick={handleAddProduct}
                disabled={isAdding}
                className="btn btn-outline mt-2 text-black w-full"
              >
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
