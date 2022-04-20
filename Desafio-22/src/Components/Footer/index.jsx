import React from "react";
import { Wrapper, Logo, CopyrightWrapper, Copyright } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Logo src="../Images/logomarca.png" />
      <CopyrightWrapper>
        <Copyright>© 2022 - Vitor Augusto</Copyright>
        <Copyright>Codelândia</Copyright>
      </CopyrightWrapper>
    </Wrapper>
  );
};

export default Footer;
