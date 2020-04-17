import React, {Component} from 'react';

import lock from '../assets/logo-circle.svg';

import '../layout/components/nav.sass';

class Nav extends Component {
  componentDidMount = () => {
    this.learnMoreOnClick();
  }

  learnMoreOnClick = () => {
    const learnMoreLink = document.querySelector('.nav__link--learn-more');
    const learnMore = document.querySelector('#learn-more');
    learnMoreLink.addEventListener('click', () => {
      learnMore.scrollIntoView({behavior: 'smooth'});
    });
  }

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
        <p className="nav__link nav__link--learn-more">
          Learn More
        </p>
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