import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';

class WizardSliderStep extends Component {

  constructor(props){
    super(props);

    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateSliderValue = this.updateSliderValue.bind(this);

    const value = props.data[props.step.fieldName];

    this.state = {
      inputValue: value || this.props.step.options[0].options.range.min
    }
  }

  updateInputValue(event) {
    this.setState({
      inputValue: parseInt(event.target.value) || this.props.step.options[0].options.range.min
    });
  }

  updateSliderValue(event,value) {
    this.setState({
      inputValue: value
    });
  }

  render() {

    const { step } = this.props ;

    return (
      <div className="container">
        {this.props.step.title}
        <div className="row">
            {!this.props.isFirstStep && <button onClick={_ => this.props.onPrevious()}>Back</button> }
        </div>
        <div className="row">
          <div className="col">
            {step.options[0].options.text}
            <Slider
              aria-label="custom thumb label"
              max={this.props.step.options[0].options.range.max}
              min={this.props.step.options[0].options.range.min}
              name={this.props.step.options[0].options.name}
              onChange={this.updateSliderValue}
              value={this.state.inputValue}
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
            <button onClick={_ => this.props.onNext(step.options[0], this.state.inputValue)}>Weiter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardSliderStep;