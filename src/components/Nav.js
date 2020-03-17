import React, {Component} from 'react';

import '../layout/components/nav.sass';

class Nav extends Component {
  render() {
    return(
      <nav className="nav">
        <h1 className="nav__header">
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