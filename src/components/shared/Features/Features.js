import React from "react";
import { BsCpu, BsMotherboard, BsPower, FaHeart } from "react-icons/bs";
import { MdOutlineSdStorage } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const cup = <BsCpu />;
  const motherboard = <BsMotherboard />;
  const powerSupply = <BsPower />;
  const storage = <MdOutlineSdStorage />;
  const ram = <CgSmartphoneRam />;
  const monitor = <FiMonitor />;

  const categories = [
    {
      id: 1,
      icon: cup,
      category: "processor",
    },
    {
      id: 2,
      icon: motherboard,
      category: "motherboard",
    },
    {
      id: 3,
      icon: powerSupply,
      category: "powerSupply",
    },
    {
      id: 4,
      icon: storage,
      category: "storage",
    },
    {
      id: 5,
      icon: ram,
      category: "ram",
    },
    {
      id: 6,
      icon: monitor,
      category: "monitor",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center m-2">Features Category</h1>
        <h3 className="text-2xl text-center m-2">
          Get choice product from the category
        </h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-5 py-5 ml-12">
        {categories?.map((category) => (
          <FeatureCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Features;
