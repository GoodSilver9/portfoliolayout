import React from "react";
import { StyledHomePage } from "./StyledHomePage";
import Title from "../Components/Title";
import About from "../Pages/About";
import ShortCut from "../Components/ShortCut";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Title />
      <ShortCut />
      <About />
    </StyledHomePage>
  );
};

export default HomePage;
