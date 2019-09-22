import React, { Component } from "react";

class WizardInputStep extends Component {
  constructor(props) {
    super(props);

    this.updateInputValue = this.updateInputValue.bind(this);

    this.state = {
      value: ""
    };
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const { step } = this.props;

    return (
      <div className="wizard-container">
        {this.props.step.title}
        <div className="row">
          {!this.props.isFirstStep && (
            <button onClick={() => this.props.onPrevious()}>Zurück</button>
          )}
        </div>
        <div className="row">
          <div className="col-sm-8">
            <img
              width="100"
              src={"svg/" + step.options[0].options.icon}
              alt={this.props.description}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {step.options[0].options.text}{" "}
            <input
              value={this.state.inputValue}
              onChange={this.updateInputValue}
            />
          </div>
          <div className="col">
            <button
              onClick={() =>
                this.props.onNext(step.options[0], this.state.inputValue)
              }
            >
              Weiter
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardInputStep;
