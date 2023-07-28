import React from "react";

const Slider = () => {
  return (
    <section className="py-6 ">
      <h1 className="text-center text-4xl ">Heres our PC Gallery</h1>

      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://i.ibb.co/CwQLD87/DSCF7140-min-1.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/fqDq7WZ/create-a-gaming-bedroom-setup-3317-1636787091140.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/bKSbsZn/images-1.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/mG7RGC2/Best-Tempered-Glass-PC-Case-pchouseandcase.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/YkLKFLZ/images.jpg"
        />
      </div>
    </section>
  );
};

export default Slider;
