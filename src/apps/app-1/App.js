import React, {Component} from 'react';

import config from './wizard-config.js';

import Wizard from "../../components/wizard/Wizard";

import './css/index.css';
import WCardStep from "../../components/wizard/steps/WCardStep";
import WSliderStep from "../../components/wizard/steps/WSliderStep";
import WSendStep from "../../components/wizard/steps/WSendStep";
import WConfirmationStep from "../../components/wizard/steps/WConfirmationStep";
import WInputStep from "../../components/wizard/steps/WInputStep";
import WMapLocatorStep from "../../components/wizard/steps/WMapLocatorStep";

class App extends Component {

    render() {
        return (
            <Wizard config={config} componentMap={
                {
                    'cards-step': WCardStep,
                    'slider-step': WSliderStep,
                    'send-step': WSendStep,
                    'confirmation-step': WConfirmationStep,
                    'input-step': WInputStep,
                    'map-locator-step': WMapLocatorStep
                }
            }/>
        );
    }
}

export default App;