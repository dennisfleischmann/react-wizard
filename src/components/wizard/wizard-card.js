import React, { Component } from 'react';

class WizardCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <img src={'svg/'+this.props.icon} className="card-img-top" alt={this.props.description}/>
        <div className="card-body text-center">
          <a href="#" onClick={this.props.onSelect} className="stretched-link">{this.props.title}</a>
        </div>
      </div>
    );
  }
}

export default WizardCard;