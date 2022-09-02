import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieDetails } from "../../types";
import ActorDetails from "./ActorDetails";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 24px 16px;
  box-sizing: border-box;
  color: #575757;
  width: 30%;
  gap: 16px;
  cursor: pointer;
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 180px;
  background: #ecebbc;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const ActorListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

interface MovieCardProps {
  movieDetail: MovieDetails;
  showActors?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movieDetail,
  showActors = false,
}) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/movie/${movieDetail.id}`)}>
      <Thumbnail />
      <Title>{movieDetail.name}</Title>
      <Description>{movieDetail.description}</Description>
      {showActors && (
        <ActorListContainer>
          {movieDetail.actors.slice(0, 2).map((actor) => (
            <ActorDetails actor={actor} key={actor.id} />
          ))}
        </ActorListContainer>
      )}
    </Container>
  );
};

export default MovieCard;
