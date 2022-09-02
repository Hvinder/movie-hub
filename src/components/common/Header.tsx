import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/Logo";
import SearchBox from "../SearchBox";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 18px 60px;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;

const Brand = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff;
`;

const SearchContainer = styled.div``;

const Header: React.FC<{
  showSearch?: boolean;
}> = ({ showSearch = false }) => {
  const navigate = useNavigate();

  return (
    <Container className="gradient-background">
      <BrandContainer onClick={() => navigate("/")}>
        <Logo />
        <Brand>Movies</Brand>
      </BrandContainer>
      {showSearch && (
        <SearchContainer>
          <SearchBox />
        </SearchContainer>
      )}
    </Container>
  );
};

export default Header;
