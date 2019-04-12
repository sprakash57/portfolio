import React, { Component } from 'react';
import Navigation from './Screens/Navigation';
import Welcome from './Screens/Welcome';
import {HashRouter, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Contact from './Screens/Contact/Contact';
import Stats from './Screens/Stats/Stats';
import Portfolio from './Screens/Portfolio/Portfolio';
import About from './Screens/About/About';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  render() {
    const { env } = this.props;
    const routes = [
      { path: '/', name: 'Welcome', Component: Welcome },
      { path: '/about', name: 'About', Component: About },
      { path: '/stats', name: 'Stats', Component: Stats },
      { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
      { path: '/contact', name: 'Contact', Component: (props) => <Contact {...props} env={env}/> }
    ]
    
    return (
      <HashRouter>
        <React.Fragment>
          <Navigation/>
          <Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
