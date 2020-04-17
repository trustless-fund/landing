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
        <p className="nav__link">
          Learn More
        </p>
        <p className="nav__link">
          Docs
        </p>
        <a 
          className="nav__button"
          href="https://app.trustless.fund/"
          target="_blank"
          rel="noopener noreferrer">
          Visit App
        </a>
      </nav>
    );
  }
}

export default Nav;