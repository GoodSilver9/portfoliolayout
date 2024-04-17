import styled from "styled-components";

export const StyledShortCut = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5em;
  background-color: #f7f7f7;
  padding: 8px 0;
  list-style: none;
  margin: 0;
  position: ${({ active }) => (active ? "fixed" : "static")};
  width: ${({ active }) => (active ? "100%" : "")};
  top: 0;
  left: 0;
  & li:nth-child(1) {
    background-color: ${({ about }) => (about ? "#fff" : "#f7f7f7")};
  }
  & li:nth-child(2) {
    background-color: ${({ skills }) => (skills ? "#fff" : "#f7f7f7")};
  }
  & li:nth-child(3) {
    background-color: ${({ projects }) => (projects ? "#fff" : "#f7f7f7")};
  }
  & li:nth-child(4) {
    background-color: ${({ github }) => (github ? "#fff" : "#f7f7f7")};
  }
  & li:nth-child(5) {
    background-color: ${({ contact }) => (contact ? "#fff" : "#f7f7f7")};
  }

  .shortCutBtn {
    cursor: pointer;
    border: none;
    background-color: #f7f7f7;
    &:hover {
      background-color: #f0f0f0;
    }
    font-weight: 100;
    padding: 1em 1.5em;
    border-radius: 10%;
    color: #636363;
    a {
      text-decoration: none;
      color: #636363;
      transition: 0.5 ease;
    }
  }
`;
