import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieDetails, MOVIE_MOCK } from "../types";
import Button from "./common/Button";
import MovieCard from "./common/MovieCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 26px 100px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  box-sizing: border-box;
  padding: 50px 0;
`;

const TopMovies = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        {MOVIE_MOCK.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movieDetail={movie} />
        ))}
      </Row>
      <Button text="View all" clickHandler={(ev) => navigate("/movies")} />
    </Container>
  );
};

export default TopMovies;
