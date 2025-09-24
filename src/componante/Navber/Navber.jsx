import React from "react";
import coinImg from "../../assets/Currency.png";
const Navber = () => {
  return (
    <div>
      <div className="navbar w-[85%] mx-auto border border-black">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold text-[#FF6B6B]">
            Petal-paradise
          </a>
        </div>
        <div>
          <button className="btn border-gray-200 border  btn-ghost">
            <span>1000</span>
            <span>Coin</span>
            <img src={coinImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
