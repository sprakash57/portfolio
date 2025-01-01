import styled from "@emotion/styled";
import Icon from "assets/icons/Icon";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  p {
    font-size: 0.8rem;
    opacity: 0.7;
    letter-spacing: 1px;
    margin: 0;
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <p>Made with 🙌 and 🧠 in Berlin</p>
      <p>
        <Icon name="Copyright" size="12" /> {year} sunnyprakash.com
      </p>
    </Container>
  );
};

export default Footer;
