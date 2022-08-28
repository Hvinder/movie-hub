import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 60px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #ffffff;
`;

const Description = styled.div`
  max-width: 30%;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Copyright = styled.div``;

const Socials = styled.div`
  display: flex;
  gap: 24px;
`;

const Footer = () => {
  return (
    <Container className="gradient-background">
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Description>
      <RightSection>
        <Copyright>Copyright @ Snapmoviehub 2022</Copyright>
        <Socials>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </Socials>
      </RightSection>
    </Container>
  );
};

export default Footer;
