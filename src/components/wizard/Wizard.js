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

  renderProgressBar(currentStep){

    if(this.state.path.length <= 1) {
      return (<div>Start
        </div>);
    }

    const startStep = this.state.path[1];

    const choosenPath = this.props.config.steps[0].options.find(option => option.stepRange.from <= startStep && option.stepRange.to >= startStep);

    const totalStepsPath =  _.filter(this.props.config.steps, step => step.id >= choosenPath.stepRange.from && step.id <= choosenPath.stepRange.to);

    const totalSharedSteps = _.filter(this.props.config.steps, step => step.isSharedStep);
     
    return (
      <div>{`(${this.state.path.length}/ ${totalStepsPath.length+totalSharedSteps.length}) for progressbar`}</div>
    )
  }

  render() {
    const currentStep = _.find(this.props.config.steps, step => step.id === this.state.currentStep);
    
    const StepComponent = this.props.customComponents[currentStep.type];
    
    const isFirstStep = this.state.path.length === 1
    return (
      <React.Fragment>
        {this.renderProgressBar(currentStep)}
        <StepComponent 
          isFirstStep={isFirstStep}
          step={currentStep}
          onNext={this.handleNext}
          onPrevious={this.handlePrevious}
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default Wizard;
