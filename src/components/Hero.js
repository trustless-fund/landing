import React, {Component} from 'react';

import heroImage from '../assets/hero-image.png';

import '../layout/components/hero.sass';

class Hero extends Component {
  render() {
    return(
      <section className="hero">
        <div className="hero__left">
          <h1 className="hero__header">
            Lock in the Time-Value of Your Money
          </h1>
          <h4 className="hero__subheader">
            Trustless Fund is an advanced timelock for ETH and ERC-20 assets. 
          </h4>
          <a 
            href="https://app.trustless.fund/"
            className="hero__button"
            target="_blank"
            rel="noopener noreferrer">
            Create Fund
          </a>
        </div>
        <img 
          src={heroImage} 
          alt="Trustless Fund" 
          className="hero__image" />
      </section>
    );
  }
}

export default Hero;