import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MovieCard from "../components/common/MovieCard";
import Spinner from "../components/common/Spinner";
import { MovieDetails, MOVIE_MOCK } from "../types";

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
  const [filteredMovieList, setFilteredMovieList] = React.useState<
    MovieDetails[]
  >([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const filtered = movieList.filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovieList(filtered);
  }, [movieList, searchQuery]);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      setSearchQuery("");
      setMovieList(MOVIE_MOCK);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <Header
        showSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Content>
        <Title>Movie information hub</Title>
        <Row>
          {filteredMovieList.length ? (
            movieList
              .slice(0, 9)
              .map((movie) => (
                <MovieCard key={movie.id} movieDetail={movie} showActors />
              ))
          ) : (
            <Spinner />
          )}
        </Row>
      </Content>
      <Footer />
    </Container>
  );
};

export default MovieList;
