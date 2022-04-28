import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Offer from "./Components/Offer";
import Presentation from "./Components/Presentation";
import Spotlight from "./Components/Spotlight";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Offer />
      <Header />
      <Presentation />
      <Spotlight />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
