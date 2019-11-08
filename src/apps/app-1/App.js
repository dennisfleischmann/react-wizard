import React, {Component} from 'react';

import config from './wizard-config.js';

import Wizard from "../../components/wiz/Wizard";

class App extends Component {

    render() {
        return (
            <Wizard config={config}/>
        );
    }
}

export default App;