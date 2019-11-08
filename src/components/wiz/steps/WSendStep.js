import React, {Component} from 'react';
import '../css/send-step.css';

class WSendStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            salutation: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = ({target: {name, value}}) => this.setState({[name]: value});

    render() {
        const {firstname, lastname, email, phone, salutation} = this.state;
        return (
            <div className={'wui outer'}>
                <div className={'wui container border'}>
                    <div className={"wui ss-background"}>
                        <div className={"wuis ss-header outer"}>
                            <div className={"wui ss-header"}>
                                <div className={"wui ss-header-title"}>
                                    Ihre Immobilienbewertung wird erstellt
                                </div>
                            </div>
                        </div>
                        <div className={"wui ss-paper"}>
                            <div className={"wui ss-content"}>
                                <div className={"wui ss-form"}>
                                    <div className={"wui ss-form-content"}>
                                        <div className={"wui ss-form-container"}>
                                            <span className={"wui ss-form-title"}>
                                                Wer soll die Immobilienbewertung erhalten?
                                            </span>
                                            <div className={"wui ss-form-gender-container"}>
                                                <div className={"wui ss-styled-radio"}
                                                     onClick={() => this.setState({salutation: "Herr"})}>
                                                    <input type={"radio"} name={"salutation"} value="Herr"
                                                           className={"wui ss-styled-radio-input"}
                                                           onChange={this.onChange} checked={salutation === "Herr"}/>
                                                    <span
                                                        className={`wui ss-styled-radio-checkmark ${salutation === "Herr" && "checked"}`}></span>
                                                    Herr
                                                </div>
                                                <div className={"wui ss-styled-radio"}
                                                     onClick={() => this.setState({salutation: "Frau"})}>
                                                    <input type={"radio"} name={"salutation"} onChange={this.onChange}
                                                           value="Frau" className={"wui ss-styled-radio-input"}
                                                           checked={salutation === "Frau"}/>
                                                    <span
                                                        className={`wui ss-styled-radio-checkmark ${salutation === "Frau" && "checked"}`}></span>
                                                    Frau
                                                </div>
                                            </div>
                                            <div className={"wui ss-styled-input"}>
                                                <input className={"wui ss-styled-input-input"} placeholder={"Vorname"} onChange={this.onChange} name={"firstname"} value={firstname}/>
                                                <span className={"wui ss-styled-input-input--invalid"}>Ihre Eingabe ist nicht korrekt</span>
                                            </div>
                                            <div className={"wui ss-styled-input"}>
                                                <input className={"wui ss-styled-input-input"} placeholder={"Nachname"} onChange={this.onChange} name={"lastname"} value={lastname}/>
                                                <span className={"wui ss-styled-input-input--invalid"}>Ihre Eingabe ist nicht korrekt</span>
                                            </div>
                                            <div className={"wui ss-styled-input"}>
                                                <input className={"wui ss-styled-input-input"} type={"email"} placeholder={"E-Mail-Adresse"} onChange={this.onChange} name={"email"} value={email}/>
                                                <span className={"wui ss-styled-input-input--invalid"}>Ihre Eingabe ist nicht korrekt</span>
                                            </div>
                                            <div className={"wui ss-styled-input"}>
                                                <input className={"wui ss-styled-input-input"} type={"tel"} placeholder={"Telefonnummer"} onChange={this.onChange} name={"phone"} value={phone}/>
                                                <span className={"wui ss-styled-input-input--invalid"}>Ihre Eingabe ist nicht korrekt</span>
                                            </div>
                                        </div>
                                        <div className={"wui ss-contact-ctrl"}></div>
                                    </div>
                                    <div className={"wui ss-form-bottom-content"}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WSendStep.propTypes = {};

export default WSendStep;

//
// <div className="row">
//     <div className="col">
//         Herr <input name="salutation" value="Herr" type="radio"
//                     onChange={this.onChange}/>
//         Frau <input name="salutation" value="Frau" type="radio"
//                     onChange={this.onChange}/>
//     </div>
// </div>
// <div className="row">
//     <div className="col">
//     <input placeholder={"Vorname"} name={"firstname"} onChange={this.onChange}/>
// </div>
// </div>
// <div className="row">
// <div className="col">
// <input placeholder={"Nachname"} name={"lastname"} onChange={this.onChange}/>
// </div>
// </div>
// <div className="row">
// <div className="col">
// <input placeholder={"E-Mail-Adresse"} type={"email"} name="email"
// onChange={this.onChange}/>
// </div>
// </div>
// <div className="row">
// <div className="col">
// <input placeholder={"Telefonnummer"} type={"tel"} name={"phone"}
// onChange={this.onChange}/>
// </div>
// </div>
// <div className="row">
// <div className="col">
// <button className={"wui action-button"}>
// <div className={"wui action-button-line"}>Bewertung erhalten</div>
// <div className={"wui action-button-line"}>kostenlos & unverbindlich</div>
// <span className={"wui action-button-arrow"}/>
// </button>
// </div>
// </div>