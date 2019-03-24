import React, { Component } from 'react';
import Navigation from './Screens/Navigation';
import Welcome from './Screens/Welcome';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Welcome/>
      </React.Fragment>
    );
  }
}

export default App;
