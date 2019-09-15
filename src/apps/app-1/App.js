import React, { Component } from 'react';
import Wizard from '../../components/wizard/Wizard';
import WizardCardsStep from '../../components/wizard/WizardCardsStep';
import WizardSliderStep from '../../components/wizard/WizardSliderStep';
import WizardSendStep from '../../components/wizard/WizardSendStep';
import WizardConfirmationStep from '../../components/wizard/WizardConfirmationStep';
import config from './wizard-config.js';

import './style.css';

class App extends Component {

  components = {
    'cards-step': WizardCardsStep,
    'slider-step': WizardSliderStep,
    'send-step': WizardSendStep,
    'confirmation-step': WizardConfirmationStep,
  };

  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <Wizard config = { config } customComponents={this.components} />
      
    );
  }
}

export default App;