import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import HeroSection from "../components/HeroSection";
import TopMovies from "../components/TopMovies";

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
      <HeroSection />
      <TopMovies />
      <Footer />
    </Container>
  );
};

export default Home;
