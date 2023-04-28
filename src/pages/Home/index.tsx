import { ThemeProvider } from '@emotion/react';
import Contact from 'src/components/Contact';
import Explore from 'src/components/Explore';
import Footer from 'src/components/Footer';
import Introduction from 'src/components/Introduction';
import Read from 'src/components/Read';
import Watch from 'src/components/Watch';
import theme from 'src/theme';
import './index.css';

const Home = () => {
 return (
  <ThemeProvider theme={theme}>
   <main className="App">
    <div className="wrapper">
     <div className="inner">
      <Introduction />
      <Read />
      <Explore />
      <Watch />
      <Contact />
      <Footer />
     </div>
    </div>
   </main>
  </ThemeProvider>
 );
};

export default Home;
