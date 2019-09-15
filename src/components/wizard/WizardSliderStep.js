import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';

class WizardSliderStep extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const { currentScreen } = props ;

    return (
      <div className="container">
        <div className="row">
          <button onClick={() => this.handleBack()}>Back</button>
        </div>
        <div className="row">
          <div className="col">
            <Slider
              aria-label="custom thumb label"
              defaultValue={20}
            />
          </div>      
          <div className="col">
            <img width="100" src={'svg/'+currentScreen.options[0].options.icon} alt={this.props.description}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {currentScreen.options[0].options.text} <input />
          </div>
          <div className="col">
            <button onClick={() => this.handleSelect(currentScreen.options[0])}>Weiter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardSliderStep;