import React, { Component } from 'react';
import Navigation from './Screens/Navigation';
import Welcome from './Screens/Welcome';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Contact from './Screens/Contact';
import Stats from './Screens/Stats/Stats';
import Portfolio from './Screens/Portfolio/Portfolio';
import About from './Screens/About/About';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/stats" component={Stats}/>
            <Route exact path="/portfolio" component={Portfolio}/>
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
