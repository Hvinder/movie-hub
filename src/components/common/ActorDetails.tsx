import React from "react";
import styled from "styled-components";
import { Actor } from "../../types";

const ActorContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 10px;
`;

const ActorPic = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #c4c4c4;
`;

const ActorName = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
`;

const ActorDetails: React.FC<{ actor: Actor }> = ({ actor }) => {
  return (
    <ActorContainer>
      <ActorPic />
      <ActorName>{actor.name}</ActorName>
    </ActorContainer>
  );
};

export default ActorDetails;
