import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 180px;
  height: 50px;
  background: #e5e5e5;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #575757;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #d8d8d8;
  }
`;

interface ButtonProps {
  text: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, clickHandler }) => {
  return <StyledBtn onClick={clickHandler}>{text}</StyledBtn>;
};

export default Button;
