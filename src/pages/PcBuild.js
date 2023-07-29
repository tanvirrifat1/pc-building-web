import React from "react";
import RootLayout from "./layout/RootLayout";

const PcBuild = () => {
  return (
    <div>
      <h1>This is pc build page</h1>
    </div>
  );
};

export default PcBuild;

PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
