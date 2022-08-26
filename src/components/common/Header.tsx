import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo";
import SearchBox from "../SearchBox";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #4994d9;
  box-sizing: border-box;
  padding: 18px 60px;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const Brand = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff;
`;

const SearchContainer = styled.div``;

const Header: React.FC<{ showSearch?: boolean }> = ({ showSearch = false }) => {
  return (
    <Container>
      <BrandContainer>
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
