import React, { Component } from 'react';
import Wizard from './components/wizard/Wizard';
import WizardCard from './components/wizard/wizard-card';
import 'bootstrap/dist/css/bootstrap.css';
import config from './configs/wizard-config.js';



class App extends Component {

  components = {
    'click-cart': WizardCard
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