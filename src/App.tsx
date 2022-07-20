import React from "react";
import { Container } from "./components/atoms";
import {
  About,
  Footer,
  Header,
  Skills,
  Work,
  Navbar,
} from "./components/organisms";
import containerStyles from "./App.styles";

const App = () => {
  return (
    <Container styles={containerStyles}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </Container>
  );
};

export default App;
