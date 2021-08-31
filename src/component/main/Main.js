import React from "react";
import PhoneList from "./phoneList/PhoneList";
import data from "../../data";
import LaptopList from "./laptopList/LaptopList";
import Section from "../section/Section";

const Main = () => {
  const { phones, laptops } = data;
  return (
    <>
      <Section title="Мобильные телефоны">
        <PhoneList phones={phones} />
      </Section>
      <Section title="Ноутбуки">
        <LaptopList laptops={laptops} />
      </Section>
    </>
  );
};

export default Main;
