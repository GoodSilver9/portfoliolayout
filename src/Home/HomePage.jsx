import React from "react";
import { StyledHomePage } from "./StyledHomePage";
import Title from "../Components/Title";
import About from "../Pages/About";
import ShortCut from "../Components/ShortCut";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import GitHub from "../Pages/GitHub";
import Contact from "../Pages/Contact";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Title />
      <ShortCut />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
    </StyledHomePage>
  );
};

export default HomePage;
