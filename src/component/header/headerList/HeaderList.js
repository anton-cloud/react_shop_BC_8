import React from "react";
import data from "../../../data";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = () => {
  const { header } = data;
  return (
    <HeaderListStyled colors={colors}>
      {header.map((headerItem) => (
        <li key={headerItem} className="headerListItem">
          <a href="/#" className="headerListLink">
            {" "}
            {headerItem}
          </a>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
