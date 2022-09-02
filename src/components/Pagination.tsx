import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${(props) => !props.disabled && "#dfdfdf"};
  }
`;

const Text = styled.div``;

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  disableButtons?: boolean;
  disableNext?: boolean;
}

const Pagination: React.FC<Props> = ({
  page,
  setPage,
  disableButtons = false,
  disableNext = false,
}) => {
  return (
    <Container>
      <Button
        disabled={disableButtons || page === 1}
        onClick={() => setPage((n) => (n > 1 ? n - 1 : 1))}
      >
        Prev
      </Button>
      <Text>{page}</Text>
      <Button
        disabled={disableButtons || disableNext}
        onClick={() => setPage((n) => n + 1)}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pagination;
