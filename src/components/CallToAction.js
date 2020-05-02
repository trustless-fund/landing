import React, {Component} from 'react';

import '../layout/components/calltoaction.sass';

class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action">
        <h2 className="call-to-action__header">
          Deploy a Trustless Fund
        </h2>
        <h4 className="call-to-action__subheader">
          Lock in the Time-Value of Your Money 
        </h4>
        <a 
          href="https://app.trustless.fund/factory"
          className="call-to-action__button"
          target="_blank"
          rel="noopener noreferrer">
          Create Fund
        </a>
        <a 
          className="call-to-action__link"
          href="https://docs.trustless.fund/"
          target="_blank"
          rel="noopener noreferrer">
            Learn More
        </a>
      </div>
    );
  }
}

export default CallToAction;