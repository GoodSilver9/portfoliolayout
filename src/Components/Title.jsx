import React from "react";
import logoIcon from "../Asset/img/portfolio-logo.png";
import { StyledTitle } from "./StyledTitle";

const Title = () => {
  return (
    <StyledTitle id="about">
      <img src={logoIcon} alt="logo" className="logo" />
      <h1 className="name">SeungMu</h1>
      <p className="description">많은 가능성, 더 나은 결과물</p>
    </StyledTitle>
  );
};

export default Title;
