import React from "react";

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </>
  );
};

export default Section;
