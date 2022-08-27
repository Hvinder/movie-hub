import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  width: 100%;
  background: #345678;
  height: 487px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #38ffbb;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  max-width: 400px;
  text-align: center;
`;

const HeroSection = () => {
  return (
    <Container>
      <Title>Movie information hub</Title>
      <Subtitle>
        We provide a list of your favourite movies and information about the
        cast.
      </Subtitle>
    </Container>
  );
};

export default HeroSection;
