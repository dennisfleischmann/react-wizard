import React, { Component } from 'react';

import WizardCard from './wizard-card';

class Wizard extends Component {

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      currentStep: 0,
      previousStep: -1,
    };

  }

  handleSelect(){
    const currentStep = this.state.currentStep;
    this.state.currentStep++;

    this.setState({
      currentStep: this.state.currentStep,
      previousStep: currentStep
    });
  }

  handleBack() {
    this.setState({
      currentStep: this.state.previousStep
    });
  }

  render() {

    const currentScreen = this.props.config[this.state.currentStep];

    switch (currentScreen.type){
      case 'click-cart': {
        return (
          <div className="container">
            <button onClick={this.handleBack}>Back</button>
            <div className="card-group">
            {
              currentScreen.options.map(item => (
                <WizardCard 
                  onSelect={this.handleSelect} 
                  title={item.options.text}
                  icon={item.options.icon}
                />))
            }
           </div>
          </div>
        );
      }
      default : {
        return null;
      }
    }
  }
}

export default Wizard;