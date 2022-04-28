import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Presentation from "../../Components/Presentation";
import Card from "../../Components/ProjectCard";
import Projects from "../../Components/Projects";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Header />
      <Presentation />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
