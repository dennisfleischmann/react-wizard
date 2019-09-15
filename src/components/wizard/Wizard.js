import React, { Component } from 'react';
import _ from 'lodash';
import Slider from '@material-ui/core/Slider';

class Wizard extends Component {


  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      currentStep: 0,
      previousStep: -1,
      path:[0],
      data:{}
    };
  }

  handleSelect(item){
    this.setState({
      currentStep: item.next,
      previousStep: this.state.currentStep,
      path:  [...this.state.path, item.next]
    })
  }
  

  handleBack() {
    
    if (this.state.path.length >= 1) {
      debugger
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
    const currentScreen = this.props.config[this.state.currentStep];

    switch (currentScreen.type){
      case 'click-cart': {

        debugger;
        var CustomComponent = this.props.customComponents['click-cart'];
        return (
          <div className="container">
            <div className="row">
              <button onClick={this.handleBack}>Back</button>
            </div>
            < div className="row">
            <div className="card-group">
            {
              currentScreen.options.map(item => (
                <CustomComponent 
                  onSelect={() => this.handleSelect(item)} 
                  title={item.options.text}
                  icon={item.options.icon}
                />))
            }
           </div>
            </div>
          
          </div>
        );
      }
      case 'slider': {
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
                <img width="50" src={'svg/'+currentScreen.options[0].options.icon} alt={this.props.description}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input />
              </div>
              <div className="col">
              <button onClick={() => this.handleSelect(currentScreen.options[0])}>Weiter</button>
              </div>

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