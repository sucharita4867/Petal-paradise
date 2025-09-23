import React, { use } from "react";

const AvailableFlowers = ({ FlowersPromise }) => {
  const flowerData = use(FlowersPromise);
  console.log(flowerData);
  return (
    <div className="mx-auto w-96 ">
      {flowerData.map((flower) => (
        <div class="card bg-base-100  shadow-sm ">
          <figure>
            <img src="" alt="Shoes" />
          </figure>
          <img
            src={flower.flower_img}
            alt={flower.flower_name}
            className="flower-img"
          />
          <h2 className="flower-title">{flower.flower_name}</h2>
          <p className="flower-text">
            <b>Color:</b> {flower.flower_color}
          </p>
          <p className="flower-text">
            <b>Type:</b> {flower.flower_type}
          </p>
          <p className="flower-text">
            <b>Origin:</b> {flower.origin}
          </p>
          <p className="flower-price">
            <b>Price:</b> ${flower.price}
          </p>
          <p className="flower-symbolism">✨ {flower.symbolism}</p>
          <button className="flower-btn">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default AvailableFlowers;
