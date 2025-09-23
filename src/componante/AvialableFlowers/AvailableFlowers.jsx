import React, { use } from "react";

const AvailableFlowers = ({ FlowersPromise }) => {
  const flowerData = use(FlowersPromise);
  console.log(flowerData);
  return <div className="w-[85%] mx-auto">Available Flowers</div>;
};

export default AvailableFlowers;
