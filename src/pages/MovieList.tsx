import React from "react";
import styled from "styled-components";

import { fetchMovies } from "../api";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MovieCard from "../components/common/MovieCard";
import Spinner from "../components/common/Spinner";
import { MovieDetails } from "../types";
import { IAppContext } from "../types/context";
import { AppContext } from "../context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 36px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #309975;
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

const MovieList: React.FC = () => {
  const [movieList, setMovieList] = React.useState<MovieDetails[]>([]);
  const [moviesLoading, setMoviesLoading] = React.useState(false);
  const { searchQuery } = React.useContext(AppContext) as IAppContext;

  const handleFetchMovies = React.useCallback(async () => {
    setMoviesLoading(true);
    const movies = await fetchMovies({
      page: 1,
      limit: 9,
      search: searchQuery,
    });
    setMoviesLoading(false);
    if (movies) {
      setMovieList(movies);
    }
  }, [searchQuery]);

  React.useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  return (
    <Container>
      <Header showSearch />
      <Content>
        <Title>Movie information hub</Title>
        <Row>
          {moviesLoading ? (
            <Spinner />
          ) : (
            movieList
              .slice(0, 9)
              .map((movie) => (
                <MovieCard key={movie.id} movieDetail={movie} showActors />
              ))
          )}
        </Row>
      </Content>
      <Footer />
    </Container>
  );
};

export default MovieList;
