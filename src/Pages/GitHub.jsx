import styled from "styled-components";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import { AboutTitle } from "../Components/AboutTitle";
import AhefButton from "../Components/Button/AhefButton";

const StyledGithub = styled.div`
  .container {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 70px;
  }
`;

const GitHub = () => {
  return (
    <StyledPageComponent>
      <StyledGithub id="github">
        <AboutTitle>GitHub 및 기타</AboutTitle>
        <p>
          저의 깃허브 리포지터리,제가 프로그래밍을 하면서 올린 깃허브 작업물들
          입니다.
        </p>
        <div className="container">
          <AhefButton
            href="https://github.com/GoodSilver9?tab=repositories"
            name="GitHub"
          />
          <AhefButton href="" name="기타문서들" className="detail" />
        </div>
      </StyledGithub>
    </StyledPageComponent>
  );
};

export default GitHub;
