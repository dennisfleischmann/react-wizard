import React, { Component } from 'react';
import Wizard from '../../components/wizard/Wizard';
import WizardCardsStep from '../../components/wizard/WizardCardsStep';
import config from './wizard-config.js';

class App extends Component {

  components = {
    'cards-step': WizardCardsStep
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