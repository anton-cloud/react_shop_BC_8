import React from "react";
import colorsForItems from "../../../../styles/colors";
import { PhoneListItemStyled } from "./PhoneListItemStyled";

const PhoneListItem = ({ phone }) => {
  const { name, isSale, description, colors, price, image } = phone;
  return (
    <PhoneListItemStyled colors={colorsForItems}>
      <div className="PhoneListItemWrapper">
        <h3 className="PhoneListItemTitle">{name}</h3>
        <img className="PhoneListItemImg" src={image} alt={name} height="150" />
        <p className="PhoneListItemSale">
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="PhoneListItemDescription">
          <span className="PhoneListItemName">Description: </span>
          {description}
        </p>
        {/* <ul>
          {colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul> */}
        <p className="PhoneListItemPrice">
          <span className="PhoneListItemName">Price: </span>
          <span>{price}</span>
        </p>
        <div className="PhoneListItemButtonsGroup">
          <button type="button" className="addToCartButton">
            Add to Cart
          </button>
          <button type="button" className="detailsCartButton">
            Details
          </button>
        </div>
      </div>
    </PhoneListItemStyled>
  );
};

export default PhoneListItem;
