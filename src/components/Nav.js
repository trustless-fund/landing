import React, {Component} from 'react';

import lock from '../assets/logo-circle.svg';

import '../layout/components/nav.sass';

class Nav extends Component {
  render() {
    return(
      <nav className="nav">
        <h1 className="nav__header">
          <img 
            src={lock} 
            alt="Trustless Fund Logo"
            className="nav__logo" />
          Trustless Fund
        </h1>
        <button className="nav__button">
          Coming Soon
        </button>
      </nav>
    );
  }
}

export default Nav;