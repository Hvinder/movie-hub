import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchMovies } from "../api";
import { MovieDetails } from "../types";
import Button from "./common/Button";
import MovieCard from "./common/MovieCard";
import Spinner from "./common/Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-grow: 1;
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
  const [movieList, setMovieList] = React.useState<MovieDetails[]>([]);
  const [moviesLoading, setMoviesLoading] = React.useState(false);

  const handleFetchMovies = React.useCallback(async () => {
    setMoviesLoading(true);
    const movies = await fetchMovies({
      page: 1,
      limit: 6,
    });
    setMoviesLoading(false);
    if (movies) {
      setMovieList(movies);
    }
  }, []);

  React.useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        {moviesLoading ? (
          <Spinner />
        ) : (
          movieList.map((movie) => (
            <MovieCard key={movie.id} movieDetail={movie} />
          ))
        )}
      </Row>
      <Button text="View all" clickHandler={(ev) => navigate("/movies")} />
    </Container>
  );
};

export default TopMovies;
