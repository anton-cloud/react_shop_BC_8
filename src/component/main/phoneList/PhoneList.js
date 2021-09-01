import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListStyled } from "./phoneListStyled";

const PhoneList = ({ phones }) => {
  return (
    <PhoneListStyled>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} />
      ))}
    </PhoneListStyled>
  );
};

export default PhoneList;
