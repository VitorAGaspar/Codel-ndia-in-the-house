import React from "react";
import { Wrapper, Nav, Logo, List, LinkList } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo src="../src/Assets/Images/logo.svg" />
        <List>
          <LinkList>MEU GITHUB</LinkList>
          <LinkList variant>ENTRAR NA COMUNIDADE</LinkList>
        </List>
      </Nav>
    </Wrapper>
  );
};

export default Header;
