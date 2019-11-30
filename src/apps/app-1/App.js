import React, {Component} from 'react';

import config from './wizard-config.js';

import Wizard from "../../components/wiz/Wizard";

import './css/index.css';

class App extends Component {

    render() {
        return (
            <Wizard config={config}/>
        );
    }
}

export default App;