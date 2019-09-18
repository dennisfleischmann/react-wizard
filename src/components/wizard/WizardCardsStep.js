import React, { Component } from 'react';
import WizardCard from './WizardCard';

class WizardCardsStep extends Component {

  render() {

    const { step, onNext } = this.props;

    return (
      <div className="container">
        <div className="row">
          {!this.props.isFirstStep && <button onClick={() => this.props.onPrevious()}>Zurück</button> }
        </div>
        < div className="row">
          <div className="card-group">
          {
            step.options.map(item => (
              <WizardCard
                key={item.id}
                onNext={(event) => { event.preventDefault(); onNext(item, item.value)}}
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