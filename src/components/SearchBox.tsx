import React from "react";
import styled from "styled-components";
import { debounce } from "lodash";

import { AppContext } from "../context";
import { IAppContext } from "../types/context";

const Input = styled.input`
  width: 192px;
  height: 35px;
  background: #e5e5e5;
  border-radius: 5px;
  padding: 16px;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #575757;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #575757;
  }
`;

const SearchBox: React.FC = () => {
  const { updateSearchQuery } = React.useContext(AppContext) as IAppContext;
  const [searchValue, setSearchValue] = React.useState("");

  const filterMovies = React.useCallback(
    debounce((val: string) => {
      updateSearchQuery(val);
    }, 500),
    []
  );

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
    filterMovies(ev.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search title"
      value={searchValue}
      onChange={handleInputChange}
    />
  );
};

export default SearchBox;
