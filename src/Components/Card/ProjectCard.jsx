import styled from "styled-components";
import fitbuddy from "../../Asset/img/FitBuddy.PNG";

const StyledProjectCard = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;

  .preview-img {
    min-width: 300px;
    width: 100%;
    max-width: 700px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
  }

  .container_title {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 45px;
    }
  }

  .container_LinkButtons {
    display: flex;
    justify-content: center;
    gap: 30px;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;

      flex-grow: 1;

      padding: 25px;
      border-radius: 8px;
    }
    .demo {
      background-color: #8cc9f0;
      color: #fff;
    }
    .detail {
      color: #636363;
      box-shadow: inset 0 0 0 1px #dddddd;
    }
  }
  .skills {
    display: flex;
    justify-content: center;
    gap: 10px;
    color: #fff;
    padding: 0px;
    margin-top: 35px;
    li {
      list-style: none;
      background-color: rgba(192, 196, 251);
      padding: 5px;
      border-radius: 8px;
    }
  }
`;

const ProjectCard = () => {
  return (
    <StyledProjectCard>
      <img src={fitbuddy} alt="fitbuddy" className="preview-img" />
      <div className="container">
        <div className="container_title">
          <h2>핏버디(팀 프로젝트)</h2>
          <p>
            '핏버디'는 운동에 대한 열정을 공유하고, 함께 땀 흘리며 건강한 생활을
            이어갈 친구들을 만날 수 있는 운동 커뮤니티입니다.
          </p>
        </div>
        <div className="container_LinkButtons">
          <a
            href="https://main--spiffy-kleicha-22273b.netlify.app/"
            className="demo"
          >
            DEMO
          </a>
          <a
            href="https://github.com/FRONTENDSCHOOL7/final-21-FitBuddy?tab=readme-ov-file"
            className="detail"
          >
            GitHub
          </a>
        </div>
        <ul className="skills">
          <li>React.js</li>
          <li>Recoil</li>
          <li>Firebase</li>
          <li>Node.js</li>
        </ul>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
