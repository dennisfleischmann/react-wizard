import React, { Component } from 'react';

class WizardConfirmationStep extends Component {
  constructor(props) {
    super(props)
  }

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