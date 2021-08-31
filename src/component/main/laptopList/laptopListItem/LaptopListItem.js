import React from "react";

const LaptopListItem = ({ laptop }) => {
  const { name, isSale, description, price, image } = laptop;
  return (
    <li>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{isSale ? "Действует акционная цена" : "В акции не участвует"}</p>
      <p>{description}</p>
      <p>Цена: {price}</p>
    </li>
  );
};

export default LaptopListItem;
