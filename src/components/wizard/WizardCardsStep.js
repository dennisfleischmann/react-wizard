import React, { Component } from 'react';
import WizardCard from './WizardCard';

class WizardCardsStep extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    const { step, onNext, onPrevious, data } = this.props;
    return (
      <div className="container">
        <div className="row">
          <button onClick={onPrevious}>Back</button>
        </div>
        < div className="row">
          <div className="card-group">
          {
            step.options.map(item => (
              <WizardCard
                onNext={() => onNext(item)} 
                title={item.options.text}
                icon={item.options.icon}
              />))
          }
          </div>
        </div>
    </div>
    );
  }
}

export default WizardCardsStep;