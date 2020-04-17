import React, {Component} from 'react';

import '../layout/components/step.sass';

class Step extends Component {
  render() {
    return (
      <section 
        className="step"
        id={this.props.id ? 'learn-more' : null}>
        <div className="step__content">
          <div className="step__side">
            <h2 className="step__header">
              {this.props.header}
            </h2>
            <p className="step__info">
              {this.props.info}
            </p>
          </div>
          <img 
            src={this.props.image}
            alt={this.props.alt}
            className={`step__image${this.props.imageClass ? this.props.imageClass : ''}`} />
        </div>
      </section>
    );
  }
}

export default Step;