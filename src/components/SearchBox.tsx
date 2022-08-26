import styled from "styled-components";

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

const SearchBox = () => {
  return <Input type="text" placeholder="Search title" />;
};

export default SearchBox;
