import React, {Component} from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
