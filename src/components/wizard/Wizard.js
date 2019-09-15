import React, { Component } from 'react';
import _ from 'lodash';

class Wizard extends Component {


  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      currentStep: 0,
      previousStep: -1,
      path: [0],
      data: {}
    };
  }

  handleNext(item){
    this.setState({
      currentStep: item.next,
      previousStep: this.state.currentStep,
      path:  [...this.state.path, item.next]
    })
  }
  

  handlePrevious() {
    
    if (this.state.path.length >= 1) {
      var clonedArray = JSON.parse(JSON.stringify(this.state.path))

      clonedArray = _.slice(clonedArray, 0, clonedArray.length-1)
      
      const lastStep = clonedArray[clonedArray.length-1];

      this.setState({
        path: clonedArray,
        currentStep: lastStep
       });
    }
  }

  handleSetStepData(step, data) {
    this.setState({
      data: {
        ...this.state.data,
        [step]: data
      }
    })
  }

  render() {
    const currentStep = this.props.config[this.state.currentStep];

      /**
       * Choosing the right component
       */

      var StepComponent = this.props.customComponents[currentScreen.type];
      return (
        <StepComponent 
          step={currentStep}
          onNext={this.handleNext}
          onPrevious={this.handlePrevious}
          data={this.state.data}
        />
      );
  }
}

export default Wizard;