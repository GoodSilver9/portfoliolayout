import React from "react";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import styled from "styled-components";

const AboutIntro = styled.div`
  .intro {
    display: flex;
    flex-direction: column;
    margin-right: auto;

    h1 {
      display: inline-block;
    }
  }
`;

const About = () => {
  return (
    <StyledPageComponent>
      <AboutIntro>
        <h1>심플한 개발자</h1>
        <p>
          더 많은 것을 익히고, 더 많은 것을 만들어보면서,개발자로서의 저 자신의
          성장과,제가 만들어내는 프로그램이 함께 진보하기를 희망합니다.
        </p>
      </AboutIntro>
      <div className="about_img">
        <img src="" alt="" />
      </div>
    </StyledPageComponent>
  );
};

export default About;
