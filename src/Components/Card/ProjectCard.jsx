import styled from "styled-components";

const StyledProjectCard = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 60px;

  .preview-img {
    min-width: 300px;
    width: 100%;
    max-width: 700px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    width: 100%;
  }

  .container_title {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-size: 28px;
      font-weight: 300;
    }
    p {
      font-size: 18px;
      font-weight: 300;
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

const ProjectCard = (props) => {
  const data = props.data;
  const skills = data.skills.split(",");

  return (
    <StyledProjectCard>
      <img src={data.prewview} alt="prewview" className="preview-img" />
      <div className="container">
        <div className="container_title">
          <h2>{data.title}</h2>
          <p>{data.info}</p>
        </div>
        <div className="container_LinkButtons">
          <a href={data.demo} className="demo">
            DEMO
          </a>
          <a href={data.github} className="detail">
            GitHub
          </a>
        </div>
        <ul className="skills">
          {skills.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
