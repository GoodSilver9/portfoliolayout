import React from "react";
import styled from "styled-components";
import profileImg from "../Asset/img/profile.jpg";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import { AboutTitle } from "../Components/AboutTitle";

const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  gap: 50px;

  .aboutIntro {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 500px;
    text-align: start;

    .aboutIntro_title {
      font-size: 32px;
      font-weight: 300;
      color: #636363;
    }
    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 1.5;
      color: #636363;
    }
  }
  .about_img {
    position: relative;
    border: 1px solid #dddddd;
    border-radius: 100%;
    padding: 10px;
    max-width: 276px;
    max-height: 206px;

    img {
      max-width: 200px;
      border-radius: 100%;
      object-fit: contain;
      float: right;
    }
  }
`;

const About = () => {
  return (
    <StyledPageComponent>
      <StyledAbout>
        <div className="aboutIntro">
          <AboutTitle className="aboutIntro_title">심플한 개발자</AboutTitle>
          <p>
            더 많은 것을 익히고, 더 많은 것을 만들어보면서,개발자로서의 저자신의
            성장과,제가 만들어내는 프로그램이 함께 진보하기를 희망합니다.
          </p>
        </div>
        <div className="about_img">
          <img src={profileImg} alt="profileImg" />
        </div>
      </StyledAbout>
    </StyledPageComponent>
  );
};

export default About;
