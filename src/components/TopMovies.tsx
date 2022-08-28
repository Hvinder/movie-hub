import React from "react";
import styled from "styled-components";
import { MovieDetails } from "../types";
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

const ViewAllBtn = styled.button`
  width: 180px;
  height: 50px;
  background: #e5e5e5;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #575757;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #d8d8d8;
  }
`;

const MOVIE_MOCK: MovieDetails[] = [
  {
    id: "1",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "2",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "3",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "4",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "5",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "6",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "7",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "8",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
  {
    id: "9",
    name: "Movie title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........ Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit........",
    actors: [
      { id: "1", name: "Actor name" },
      { id: "2", name: "Actor name" },
    ],
    category: ["Category", "Category", "Category"],
  },
];

const TopMovies = () => {
  return (
    <Container>
      <Row>
        {MOVIE_MOCK.slice(0, 9).map((movie) => (
          <MovieCard movieDetail={movie} />
        ))}
      </Row>
      <ViewAllBtn>View all</ViewAllBtn>
    </Container>
  );
};

export default TopMovies;
