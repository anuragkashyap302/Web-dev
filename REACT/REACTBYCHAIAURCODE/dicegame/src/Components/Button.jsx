// Button.js
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: #4caf50; /* Primary green */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

export default Button;
