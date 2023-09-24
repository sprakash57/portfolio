import styled from '@emotion/styled';

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
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <p>Made with 🙌 and 🧠</p>
      <p>©️ {year} sunnyprakash.com</p>
    </Container>
  );
};

export default Footer;
