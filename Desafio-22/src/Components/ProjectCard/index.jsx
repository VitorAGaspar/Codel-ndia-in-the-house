import React from "react";
import {
  Wrapper,
  Container,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ButtonWrapper,
  Button,
} from "./style";

const Card = ({ title, description }) => {
  return (
    <Wrapper>
      <Container>
        <ProjectImage src="../Images/ProjectImage.png" />
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonWrapper>
          <Button variant>DEMO</Button>
          <Button>GITHUB</Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Card;
