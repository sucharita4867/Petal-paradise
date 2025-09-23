import React from "react";
import coinImg from "../../assets/Currency.png";
const Navber = () => {
  return (
    <div>
      <div class="navbar w-[85%] mx-auto border border-black">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl font-bold text-[#FF6B6B]">
            Petal-paradise
          </a>
        </div>
        <div class="">
          <button class="btn border-gray-200 border  btn-ghost">
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
