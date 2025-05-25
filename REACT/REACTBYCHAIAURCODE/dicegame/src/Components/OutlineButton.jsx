// OutlineButton.js
import styled from "styled-components";

const OutlineButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #4caf50;
  background-color: transparent;
  color: #4caf50;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

export default OutlineButton;
