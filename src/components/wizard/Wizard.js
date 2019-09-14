import React, { Component } from 'react';
import _ from 'lodash';

import WizardCard from './wizard-card';

class Wizard extends Component {

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      currentStep: 0,
      previousStep: -1,
      path:[0]
    };

  }

  handleSelect(){
    const currentStep = this.state.currentStep;
    this.state.currentStep++;

    this.setState({
      currentStep: this.state.currentStep,
      previousStep: currentStep
    });

    console.log(this.state);
  }

  handleBack() {
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

  render() {

    console.log(this.state);
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
                  onSelect={()  => {
                    this.setState({
                      currentStep: item.next,
                      previousStep: this.state.currentStep,
                      path:  [...this.state.path, item.next]
                    })

                    // debugger;
                    console.log(this.state);
                    
                  }} 
                  title={item.options.text}
                  icon={item.options.icon}
                />))
            }
           </div>
          </div>
        );
      }
      case 'slider': {
        return (
          <div className="container">
            
            <button onClick={this.handleBack}>Back</button>
       
            {currentScreen.description}
            {currentScreen.title}
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