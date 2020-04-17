import React, {Component} from 'react';

import '../layout/components/calltoaction.sass';

class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action">
        <h2 className="call-to-action__header">
          Lock in the Time-Value of Your Money
        </h2>
        <a 
          href="https://app.trustless.fund/"
          className="call-to-action__button"
          target="_blank"
          rel="noopener noreferrer">
          Create Fund
        </a>
      </div>
    );
  }
}

export default CallToAction;