import styled from "styled-components";

export const PhoneListItemStyled = styled.li`
  width: 100%;
  padding: 10px;
  list-style: none;
  .PhoneListItemWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.colors.darkColors.secondary};
    border-radius: 14px;
    padding: 20px;
  }
  .PhoneListItemTitle {
    text-align: center;
  }
  .PhoneListItemImg {
    height: 200px;
    object-fit: contain;
    margin-top: 20px;
  }

  .PhoneListItemSale {
    margin-top: 20px;
  }

  .PhoneListItemDescription {
    margin-top: 20px;
    flex-grow: 1;
  }

  .PhoneListItemName {
    font-weight: 700;
  }

  .PhoneListItemPrice {
    margin-top: 20px;
  }
  .PhoneListItemButtonsGroup {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .PhoneListItemButtonsGroup button {
    background-color: ${(props) => props.colors.darkColors.main};
    width: 50%;
    border: none;
    height: 30px;
    /* padding: 10px; */
    color: ${(props) => props.colors.darkColors.buttonText};
    text-transform: uppercase;
    transition: 300ms;

    &:first-child {
      margin-right: 4px;
    }

    &:hover {
      background-color: ${(props) => props.colors.darkColors.active};
    }
  }

  .addToCartButton {
    border-radius: 14px 0 0 14px;
    align-self: center;
  }
  .detailsCartButton {
    border-radius: 0 14px 14px 0;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;
