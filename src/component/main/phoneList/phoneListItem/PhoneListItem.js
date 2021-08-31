import React from "react";

const PhoneListItem = ({ phone }) => {
  const { name, isSale, description, colors, price, image } = phone;
  return (
    <li>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{isSale ? "Действует акционная цена" : "В акции не участвует"}</p>
      <p>{description}</p>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <p>
        Цена: <span>{price}</span>
      </p>
    </li>
  );
};

export default PhoneListItem;
