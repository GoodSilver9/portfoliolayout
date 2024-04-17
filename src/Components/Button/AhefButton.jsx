import React from "react";
import styled from "styled-components";

const StyledAhefButton = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  flex-grow: 1;
  padding: 20px 0px;
  /* padding: 20px 80px; */
  border-radius: 8px;
  background-color: #8cc9f0;
  color: #fff;

  &.detail {
    background-color: #fff;
    color: #636363;
    box-shadow: inset 0 0 0 1px #dddddd;
  }
`;

const AhefButton = (props) => {
  return (
    <StyledAhefButton href={props.href} className={props.className}>
      {props.name}
    </StyledAhefButton>
  );
};

export default AhefButton;
