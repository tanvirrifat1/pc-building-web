import React from "react";
import RootLayout from "./layout/RootLayout";
import { BsCpu, BsMotherboard, BsPower } from "react-icons/bs";
import { MdOutlineSdStorage } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import PcBuildDetails from "./Pc-category/PcBuildDetails";
import SinglePC from "./SinglePC";
import { getSession } from "next-auth/react";

const PcBuild = ({ allPC }) => {
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
      category: "processors",
    },
    {
      id: 2,
      icon: motherboard,
      category: "motherboard",
    },
    {
      id: 3,
      icon: powerSupply,
      category: "Power Supply",
    },
    {
      id: 4,
      icon: storage,
      category: "storage device",
    },
    {
      id: 5,
      icon: ram,
      category: "RAM",
    },
    {
      id: 6,
      icon: monitor,
      category: "monitor",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-emerald-900 mt-3">
          PC-Store build your own computer
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-5 py-5">
        {categories?.map((category) => (
          <PcBuildDetails key={category?.id} category={category} />
        ))}
      </div>
      <div>
        <SinglePC allPC={allPC} />
      </div>
    </div>
  );
};

export default PcBuild;

PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const email = session?.user?.email;
  const res = await fetch(
    `https://pc-builder-server-jade.vercel.app/user?email=${email}`
  );
  const data = await res.json();

  return {
    props: {
      allPC: data,
    },
  };
};
