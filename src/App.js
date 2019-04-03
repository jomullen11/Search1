import React, { Component, Fragment } from 'react';
import './App.css';
import Routes from './Route';
import Navbar from './Component/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <Navbar />
          <Routes />
        </Fragment>
      </div>
    );
  }
}

export default App;
