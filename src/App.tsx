import './App.css';
import Introduction from './components/Introduction';
import Explore from './components/Explore';
import Watch from './components/Watch';
import Read from './components/Read';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
 return (
  <main className="App">
   <div className="wrapper">
    <div className="inner">
     <Introduction />
     <hr className="divider" />
     <Read />
     <hr className="divider" />
     <Explore />
     <hr className="divider" />
     <Watch />
     <hr className="divider" />
     <Contact />
     <hr className="divider" />
     <Footer />
    </div>
   </div>
  </main>
 );
}

export default App;
