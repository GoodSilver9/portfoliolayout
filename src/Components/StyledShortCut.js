import styled from "styled-components";

export const StyledShortCut = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5em;
  background-color: #f7f7f7;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  list-style: none;
  margin: 0;

  .shortCutBtn {
    cursor: pointer;
    border: none;
    background-color: #fff;
    font-weight: 100;
    padding: 1em 1.5em;
    border-radius: 10%;
    color: #636363;
  }
`;
