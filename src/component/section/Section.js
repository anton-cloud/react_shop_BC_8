import React from "react";
import { SectionStyled } from "./SectionStyled";
import colors from "../../styles/colors";

const Section = ({ title, children }) => {
  return (
    <SectionStyled colors={colors}>
      <h2 className="SectionTitle">{title.toUpperCase()}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
