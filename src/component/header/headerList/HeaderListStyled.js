import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  .headerListItem {
    list-style: none;
  }
  .headerListItem:not(:last-child) {
    margin-right: 20px;
  }
  .headerListLink {
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.colors.darkColors.main};

    &: hover {
      color: ${(props) => props.colors.darkColors.active};
    }
  }
`;
