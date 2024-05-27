import React, { useState } from "react";
import { StyledShortCut } from "./StyledShortCut";

const ShortCut = () => {
  const [active, setActive] = useState(false);
  const [about, setAbout] = useState(true);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [github, setGitHub] = useState(false);
  const [contact, setContact] = useState(false);

  document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    if (scrollY > 432) {
      setActive(true);
      setSkills(false);
      setAbout(true);
    } else {
      setActive(false);
      setSkills(false);
      setProjects(false);
      setGitHub(false);
    }
    if (scrollY > 750) {
      setAbout(false);
      setSkills(true);
      setProjects(false);
    }
    if (scrollY > 1895) {
      setSkills(false);
      setProjects(true);
      setGitHub(false);
    }
    if (scrollY > 3370) {
      setSkills(false);
      setProjects(false);
      setGitHub(true);
    }
    if (scrollY > 4000) {
      setContact(true);
      setGitHub(false);
    } else {
      setContact(false);
    }
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const aboutSection = document.getElementById("skills");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const aboutSection = document.getElementById("projects");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGitHub = () => {
    const aboutSection = document.getElementById("github");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const aboutSection = document.getElementById("contact");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledShortCut
      active={active}
      about={about}
      skills={skills}
      projects={projects}
      github={github}
      contact={contact}
    >
      <li className="shortCutBtn">
        <span onClick={scrollToAbout}>About</span>
      </li>
      <li className="shortCutBtn">
        <span onClick={scrollToSkills}>스킬</span>
      </li>
      <li className="shortCutBtn">
        <span onClick={scrollToProjects}>프로젝트</span>
      </li>
      <li className="shortCutBtn">
        <span onClick={scrollToGitHub}>깃허브 및 기타</span>
      </li>
      <li className="shortCutBtn">
        <span onClick={scrollToContact}>CONTACT</span>
      </li>
    </StyledShortCut>
  );
};

export default ShortCut;
