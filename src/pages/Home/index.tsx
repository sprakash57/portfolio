import { ThemeProvider } from '@emotion/react';
import Contact from 'components/Contact';
import Explore from 'components/Explore';
import Footer from 'components/Footer';
import Introduction from 'components/Introduction';
import Read from 'components/Read';
import Watch from 'components/Watch';
import theme from 'theme/index';
import { HomeContainer, HomeWrapper, HomeInner } from './styled';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer className="App">
        <HomeWrapper className="wrapper">
          <HomeInner className="inner">
            <Introduction />
            <Read />
            <Explore />
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
