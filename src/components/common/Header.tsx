import React from "react";
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
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
}> = ({ showSearch = false, setSearchQuery, searchQuery }) => {
  return (
    <Container className="gradient-background">
      <BrandContainer>
        <Logo />
        <Brand>Movies</Brand>
      </BrandContainer>
      {showSearch && (
        <SearchContainer>
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </SearchContainer>
      )}
    </Container>
  );
};

export default Header;
