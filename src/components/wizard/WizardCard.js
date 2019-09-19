import React, { Component } from 'react';

class WizardCard extends Component {

  render() {

    return (
      <div className="card">
        <img src={'svg/'+this.props.icon} className="card-img-top" alt={this.props.description}/>
        <div className="card-body text-center">
          <button onClick={this.props.onNext} className="stretched-link">{this.props.title}</button>
        </div>
      </div>
    );
  }
}

export default WizardCard;