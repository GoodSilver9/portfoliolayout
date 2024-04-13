import styled from "styled-components";
import HTML from "../Asset/img/HTML5.svg";
import CSS from "../Asset/img/CSS.svg";
import JavaScript from "../Asset/img/JavaScript.svg";
import TypeScript from "../Asset/img/TypeScript.svg";
import Sass from "../Asset/img/Sass.svg";
import react from "../Asset/img/React.svg";
import firebase from "../Asset/img/firebase.png";

const StyledSkill = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  img {
    width: 125px;
    height: 125px;
  }
`;

const logos = {
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  Sass,
  react,
  firebase,
};

const SkillList = (props) => {
  const title = props.data.title;
  const imgSrc = props.data.imgSrc;
  return (
    <StyledSkill>
      <img src={logos[imgSrc]} alt="skillImg" />
      <div>{title}</div>
    </StyledSkill>
  );
};

export default SkillList;
