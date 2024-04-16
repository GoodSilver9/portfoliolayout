import React from "react";
import styled from "styled-components";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import { AboutTitle } from "../Components/AboutTitle";

const StyledContact = styled.div`
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact_item {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

const Contact = () => {
  return (
    <StyledPageComponent>
      <StyledContact id="contact">
        <AboutTitle>Contact</AboutTitle>
        <div className="contact">
          <dl>
            <dt>Email</dt>
            <dd>
              <a>dltmdan12@gmail.com</a>
            </dd>
          </dl>
        </div>
      </StyledContact>
    </StyledPageComponent>
  );
};

export default Contact;
