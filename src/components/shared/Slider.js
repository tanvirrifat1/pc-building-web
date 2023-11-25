import React from "react";

import PC from "../../../assests/cover1.png";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container ">
          <Image src={PC} alt="" className="w-full h-full " />
        </div>
      </section>
    </div>
  );
};

export default Slider;
