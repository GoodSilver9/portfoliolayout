import React from "react";
import styled from "styled-components";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import { AboutTitle } from "../Components/AboutTitle";

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
  .contact_info {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    font-weight: 400;

    & :nth-child(2) {
      color: #636363;
      font-weight: 300;
      text-decoration: underline 1px #636363;
      text-underline-position: under;
    }
  }
`;

const Contact = () => {
  return (
    <StyledPageComponent>
      <StyledContact id="contact">
        <AboutTitle>Contact</AboutTitle>
        <div className="contact">
          <div className="contact_info">
            <div>Email</div>
            <div>dltmdan12@gmail.com</div>
          </div>
          <div className="contact_info">
            <div>Phone</div>
            <div>010-5100-5138</div>
          </div>
        </div>
        <div></div>
      </StyledContact>
    </StyledPageComponent>
  );
};

export default Contact;
