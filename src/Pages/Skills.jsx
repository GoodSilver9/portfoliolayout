import styled from "styled-components";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import SkillList from "../Components/SkillList";
import { AboutTitle } from "../Components/AboutTitle";

const webSkillData = [
  {
    title: "HTML",
    imgSrc: "HTML",
  },
  {
    title: "CSS",
    imgSrc: "CSS",
  },
  {
    title: "JavaScript",
    imgSrc: "JavaScript",
  },
  {
    title: "TypeScript",
    imgSrc: "TypeScript",
  },
  {
    title: "Sass",
    imgSrc: "Sass",
  },
  {
    title: "react",
    imgSrc: "react",
  },
];
const eTC = [{ title: "Google Firebase", imgSrc: "firebase" }];

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 130px;
  padding-bottom: 150px;

  li {
    list-style: none;
  }
`;

const Skills = () => {
  return (
    <StyledPageComponent id="skills">
      <AboutTitle>WEB FRONTEND SKILLS</AboutTitle>
      <StyledSkills>
        {webSkillData.map((data) => {
          return <SkillList key={data.title} data={data} />;
        })}
      </StyledSkills>
      <AboutTitle>ETC</AboutTitle>
      <StyledSkills>
        {eTC.map((data) => {
          return <SkillList key={data} data={data} />;
        })}
      </StyledSkills>
    </StyledPageComponent>
  );
};

export default Skills;
