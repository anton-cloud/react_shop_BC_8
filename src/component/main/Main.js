import React from "react";
import PhoneList from "./phoneList/PhoneList";
import data from "../../data";
import LaptopList from "./laptopList/LaptopList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";

const Main = () => {
  const { phones, laptops } = data;
  return (
    <MainStyled>
      <Section title="Мобильные телефоны">
        <PhoneList phones={phones} />
      </Section>
      <Section title="Ноутбуки">
        <LaptopList laptops={laptops} />
      </Section>
    </MainStyled>
  );
};

export default Main;
