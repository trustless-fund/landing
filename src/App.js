import React, {Component} from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
