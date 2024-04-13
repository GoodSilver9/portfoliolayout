import styled from "styled-components";

export const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: x-large;
  padding-bottom: 50px;

  &::after {
    content: "";
    width: 150px;
    height: 1.5px;
    margin-top: 30px;
    background-image: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
  }
`;
