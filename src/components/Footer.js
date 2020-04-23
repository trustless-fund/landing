import React, {Component} from 'react';

import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import discord from '../assets/discord.png';
import medium from '../assets/medium.png';

import '../layout/components/footer.sass';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <p className="footer__disclaimer">
          {/* TODO: Actually get the current year */}
          © 2020 Trustless Fund
        </p>
        <a 
          href="https://github.com/trustless-fund" 
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img 
            src={github} 
            alt="Github"
            className="footer__image" />
        </a>
        <a 
          href="https://twitter.com/trustlessfund" 
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img 
            src={twitter} 
            alt="Twitter"
            className="footer__image" />
        </a>
        <a 
          href="https://discord.gg/sC7Rzd"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img 
            src={discord} 
            alt="Discord"
            className="footer__image" />
        </a>
        <a 
          href="https://medium.com/trustless-fund"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img 
            src={medium} 
            alt="Medium"
            className="footer__image" />
        </a>
      </footer>
    );
  }
}

export default Footer;