import React from "react";
import { StyledPageComponent } from "../Components/StyledPageComponent";
import { AboutTitle } from "../Components/AboutTitle";
import ProjectCard from "../Components/Card/ProjectCard";
import fitbuddy from "../Asset/img/FitBuddy.PNG";
import devking from "../Asset/img/devking.png";

const projectData = [
  {
    title: "핏버디 (팀 프로젝트)",
    info: "'핏버디'는 운동에 대한 열정을 공유하고, 함께 땀 흘리며 건강한 생활을 이어갈 친구들을 만날 수 있는 운동 커뮤니티 ",
    prewview: fitbuddy,
    demo: "https://main--spiffy-kleicha-22273b.netlify.app/",
    github:
      "https://github.com/FRONTENDSCHOOL7/final-21-FitBuddy?tab=readme-ov-file",
    skills: "React.js,Recoil,Firebase,Node.js",
  },
  {
    title: "개발왕 아기사자",
    info: "개발왕을 꿈꾸는 개발 문서들과 API를 활용한 검색기능입니다.",
    prewview: devking,
    demo: "https://devkingbabylion.netlify.app/",
    github: "https://github.com/devkingbabylion/devkingbabylion",
    skills: "React.js,React Router,Recoil",
  },
];

const Projects = () => {
  return (
    <StyledPageComponent id="projects">
      <AboutTitle>MAIN PROJECT</AboutTitle>
      {projectData.map((data) => {
        return <ProjectCard key={data.title} data={data} />;
      })}
    </StyledPageComponent>
  );
};

export default Projects;
