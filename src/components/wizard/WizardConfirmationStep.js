import React, { Component } from 'react';

class WizardConfirmationStep extends Component {

  render() {

    const { step } = this.props;

    return (
      <div>
        { step.title }
      </div>
    );
  }
}

export default WizardConfirmationStep;