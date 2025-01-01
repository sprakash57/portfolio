import { ThemeProvider } from "@emotion/react";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Introduction from "components/Introduction";
import Read from "components/Read";
import Watch from "components/Watch";
import theme from "theme/index";
import { HomeContainer, HomeWrapper, HomeInner } from "./styled";
import Resume from "components/Resume";
import Tour from "components/Tour";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <Tour />
        <HomeWrapper>
          <Resume />
          <HomeInner>
            <Introduction />
            <Read />
            <Watch />
            <Contact />
            <Footer />
          </HomeInner>
        </HomeWrapper>
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
