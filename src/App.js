import React, {Component} from 'react';

import Nav from './components/Nav';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
      </div>
    );
  }
}

export default App;
