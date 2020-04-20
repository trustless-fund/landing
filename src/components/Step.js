import React, {Component} from 'react';

import '../layout/components/step.sass';

class Step extends Component {
  componentDidMount = () => {
    this.triggerAnimation();
  }

  triggerAnimation = () => {
    const stepSides = Array.from(document.querySelectorAll('.step__side'));
    const stepImages = Array.from(document.querySelectorAll('.step__image'));
    const elements = stepSides.concat(stepImages);

    window.onscroll = () => {
      elements.forEach(element => {
        if(window.scrollY + (window.innerHeight / 4) * 3 > element.offsetTop) {
          element.classList.add('active');
        }
      });
    }
  }

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