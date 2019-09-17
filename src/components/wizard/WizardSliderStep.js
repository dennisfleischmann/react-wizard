import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';

class WizardSliderStep extends Component {

  constructor(props){
    super(props);

    this.updateInputValue = this.updateInputValue.bind(this);

    this.state = {
      inputValue: props.step.options[0].options.default
    }
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {

    const { step } = this.props ;

    return (
      <div className="container">
        {step.title}
        <div className="row">
            {!this.props.isFirstStep && <button onClick={() => this.props.onPrevious()}>Back</button> }
        </div>
        <div className="row">
          <div className="col">
            {step.options[0].options.text}
            <Slider
              aria-label="custom thumb label"
              defaultValue={20}
            />
          </div>      
          <div className="col">
            <img width="100" src={'svg/'+step.options[0].options.icon} alt={this.props.description}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {step.options[0].options.unit}  <input value={this.state.inputValue} onChange={this.updateInputValue}/>
          </div>
          <div className="col">
            <button onClick={() => this.props.onNext(step.options[0], this.state.inputValue)}>Weiter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardSliderStep;