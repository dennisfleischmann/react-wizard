import React, { Component } from 'react';
import Wizard from './components/wizard/Wizard';
import config from './wizard-config.js';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {

    super(props);
  }
  render() {
    return ( 
      <Wizard config = { config } />
      
    );
  }
}

export default App;