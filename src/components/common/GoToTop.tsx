import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/Arrow";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background: #306099;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
  position: sticky;
  bottom: 50px;
  left: 100%;
`;

const GoToTop: React.FC = () => {
  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Container onClick={handleClick}>
      <Arrow />
    </Container>
  );
};

export default GoToTop;
