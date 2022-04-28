import React from "react";
import { Wrapper } from "./styles";
const Cards = ({ source }) => {
  return (
    <Wrapper>
      <img src={source} alt="Imagem qualquer" />
    </Wrapper>
  );
};

export default Cards;
