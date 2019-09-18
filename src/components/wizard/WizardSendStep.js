import React, { Component } from 'react';

class WizardSendStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salutation: '',
      name: '',
      familyName: '',
      email: '',
      phone: '',
    }
  }

  render() {

    const { onSubmit, step } = this.props;

    const nextStep = step.options[0].next;

    return (
      <div className="container">
        {this.props.step.title}
        <div className="row">
          <div className="col">
            Herr <input name="salutation" value="Herr" type="radio" onChange={ event =>  this.setState({salutation: event.currentTarget.value })}/>
            Frau <input name="salutation" value="Frau" type="radio" onChange={ event =>  this.setState({salutation: event.currentTarget.value })}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Vorname <input onChange={ event =>  this.setState({name: event.currentTarget.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            Nachname <input onChange={ event =>  this.setState({familyName: event.currentTarget.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            E-Mail <input onChange={ event =>  this.setState({email: event.currentTarget.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            Telefonnummer <input onChange={ event =>  this.setState({phone: event.currentTarget.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
          <button onClick={_ => onSubmit(this.state, nextStep)}>{step.options[0].text}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardSendStep;