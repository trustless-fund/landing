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
        <a 
          className="nav__link"
          href="https://medium.com/trustless-fund"
          target="_blank"
          rel="noopener noreferrer">
          Blog
        </a>
        <a 
          className="nav__link"
          href="https://docs.trustless.fund/"
          target="_blank"
          rel="noopener noreferrer">
          Docs
        </a>
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