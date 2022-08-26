import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
