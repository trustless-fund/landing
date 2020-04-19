import React, {Component} from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Step from './components/Step';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

import Calendar from './assets/calendar.png';
import Portfolio from './assets/portfolio.svg';
import Lock from './assets/lock.png';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Hero />
        <Step 
          header="Set a beneficiary & 
          expiration date"
          info="Lock in your tokens for as long as you'd like 
          and choose who you want them to go to 
          once the time runs out."
          image={Calendar}
          alt="Expiration"
          id={true} />
        <Step 
          header="Create a portfolio"
          info="Deposit ETH & ERC-20 tokens with the freedom to choose your risk tolerance and investment strategy."
          image={Portfolio}
          alt="Portfolio" />
        <Step 
          header="Lock in your money"
          info="Your fund is locked in until your expiration date, but you’re free to deposit more tokens at any time."
          image={Lock}
          alt="Lock"
          imageClass=" step__image--lock" />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default App;
