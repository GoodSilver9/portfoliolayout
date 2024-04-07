import React from "react";
import { StyledShortCut } from "./StyledShortCut";

const ShortCut = () => {
  return (
    <StyledShortCut>
      <li className="shortCutBtn">About</li>
      <li className="shortCutBtn">스킬</li>
      <li className="shortCutBtn">프로젝트</li>
      <li className="shortCutBtn">블로그 및 기타</li>
      <li className="shortCutBtn">CONTACT</li>
    </StyledShortCut>
  );
};

export default ShortCut;
