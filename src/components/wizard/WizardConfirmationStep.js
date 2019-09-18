import React, { Component } from 'react';

class WizardConfirmationStep extends Component {

  render() {

    return (
      <div>
       {this.props.step.title}
      </div>
    );
  }
}

export default WizardConfirmationStep;