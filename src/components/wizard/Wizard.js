import React, { Component } from 'react';
import _ from 'lodash';

class Wizard extends Component {

  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      currentStep: 0,
      previousStep: -1,
      path: [0],
      data: {}
    };
  }

  handleNext(selection, value) {

    const stepConfig = _.find(this.props.config.steps, step => step.id === this.state.currentStep);
    
    this.setState({
      currentStep: selection.next,
      path:  [...this.state.path, selection.next],
      data: {
        ...this.state.data,
        [`${stepConfig.fieldName}`]: value
      }
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

  handleSubmit(contact, nextStep) {

    this.setState({
      contact,
      currentStep: nextStep,
    })

    console.log(this.state.data, contact);
  }

  render() {
    const currentStep = _.find(this.props.config.steps, step => step.id === this.state.currentStep);
    
    var StepComponent = this.props.customComponents[currentStep.type];
    return (
      <StepComponent 
        step={currentStep}
        onNext={this.handleNext}
        onPrevious={this.handlePrevious}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default Wizard;