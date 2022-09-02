import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMovie } from "../api";
import ActorDetails from "../components/common/ActorDetails";
import Footer from "../components/common/Footer";
import GoToTop from "../components/common/GoToTop";
import Header from "../components/common/Header";
import Spinner from "../components/common/Spinner";
import { MovieDetails as IMovieDetails } from "../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
`;

const SpinnerCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 36px;
`;

const Poster = styled.div`
  width: 100%;
  background: #ecebbc;
  height: 500px;
  border-radius: 10px;
`;

const Heading = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 72px;
  color: #040505;
`;

const Categories = styled.div`
  display: flex;
  gap: 12px;
`;

const CategoryTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 4px;
  border: 2px solid rgba(0, 0, 0, 0.56);
`;

const LongDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #575757;
`;

const CastBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.56);
`;

const MovieDetails: React.FC = () => {
  let { id } = useParams();

  const [details, setDetails] = React.useState<IMovieDetails>();
  const [detailsLoading, setDetailsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      if (id) {
        setDetailsLoading(true);
        const data = await fetchMovie({ id });
        setDetailsLoading(false);
        if (data) {
          setDetails(data);
        }
      }
    })();
  }, [id]);

  return (
    <Container>
      <Header />
      <Content>
        {detailsLoading ? (
          <SpinnerCon>
            <Spinner />
          </SpinnerCon>
        ) : (
          <>
            <Poster />
            <Heading>{details?.name}</Heading>
            <Categories>
              {details?.categories.map((category) => (
                <CategoryTag key={category.id}>{category.name}</CategoryTag>
              ))}
            </Categories>
            <LongDescription>{details?.longDescription}</LongDescription>
            <Heading>Cast</Heading>
            <CastBox>
              {details?.actors.map((actor) => (
                <ActorDetails actor={actor} key={actor.id} />
              ))}
            </CastBox>
          </>
        )}
        <GoToTop />
      </Content>
      <Footer />
    </Container>
  );
};

export default MovieDetails;
