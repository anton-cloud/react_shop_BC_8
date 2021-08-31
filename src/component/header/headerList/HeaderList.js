import React from "react";
import data from "../../../data";

const HeaderList = () => {
  const { header } = data;
  return (
    <ul>
      {header.map((headerItem) => (
        <li key={headerItem}>{headerItem}</li>
      ))}
    </ul>
  );
};

export default HeaderList;
