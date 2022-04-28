import React from "react";
import Cards from "../Cards";
import { SpotlightWrapper, Wrapper } from "./styles";
import shoes from "./shoes.json";
const Spotlight = () => {
  return (
    <Wrapper>
      <h3>Destaques</h3>
      <p>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
      </p>
      <SpotlightWrapper>
        {shoes.map((shoe) => (
          <Cards source={shoe.img} />
        ))}
      </SpotlightWrapper>
    </Wrapper>
  );
};

export default Spotlight;
