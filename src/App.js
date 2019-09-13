import React, { Component } from 'react';
import Wizard from './components/wizard/Wizard';
import config from './wizard-config.js';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {

    super(props);
  }
  render() {
    return ( < div className = "container" >
      <Wizard config = { config } />
      </div>
    );
  }
}

export default App;

/**
 * import React from 'react';
import './App.css';

import Wizard from './components/wizard/Wizard';
import config from './wizard-config.js';
import { tsConstructorType } from '@babel/types';

console.log('config', config);

function App() {

  
  return (
    <div className="container">
      <Wizard config={ config } />
  </div>
  );
}

export default App;
 */