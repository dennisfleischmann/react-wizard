import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../css/send-step.css';

class WSendStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            salutation: "Herr",
            firstnameErr: false,
            lastnameErr: false,
            emailErr: false,
            emailFormatErr: false,
            phoneErr: false,
            salutationErr: false
        };
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange = ({target: {name, value}}) => this.setState({
        [name]: value,
        [`${name}Err`]: false,
        emailFormatErr: false
    });

    onBlur = ({target: {name, value}}) => {
        if (!value) {
            this.setState({[`${name}Err`]: true});
        } else if (name === "email") {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.setState({emailFormatErr: true});
            }
        }
    };

    render() {
        const {onNext, options} = this.props;
        const {next} = options[0];
        const {firstname, lastname, email, phone, salutation, firstnameErr, lastnameErr, phoneErr, emailErr, emailFormatErr} = this.state;
        const disable = !(firstname && lastname && email && phone && salutation) || firstnameErr || lastnameErr || phoneErr || emailErr || emailFormatErr;
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
                                            <div className={"wui ss-form-gender-container margin-below"}>
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
                                            <div
                                                className={`wui ss-styled-input margin-below ${firstnameErr && "ss-styled-input-input-invalid"}`}>
                                                <input className={"wui ss-styled-input-input"} placeholder={"Vorname"}
                                                       onBlur={this.onBlur}
                                                       onChange={this.onChange} name={"firstname"} value={firstname}/>
                                                {firstnameErr &&
                                                <span className={"wui ss-styled-input-input-err"}>Ihre Eingabe ist nicht korrekt</span>}
                                            </div>
                                            <div
                                                className={`wui ss-styled-input margin-below ${lastnameErr && "ss-styled-input-input-invalid"}`}>
                                                <input className={"wui ss-styled-input-input"} placeholder={"Nachname"}
                                                       onBlur={this.onBlur}
                                                       onChange={this.onChange} name={"lastname"} value={lastname}/>
                                                {lastnameErr &&
                                                <span className={"wui ss-styled-input-input-err"}>Ihre Eingabe ist nicht korrekt</span>}
                                            </div>
                                            <div
                                                className={`wui ss-styled-input margin-below ${emailErr && "ss-styled-input-input-invalid"}`}>
                                                <input className={"wui ss-styled-input-input"} type={"email"}
                                                       onBlur={this.onBlur}
                                                       placeholder={"E-Mail-Adresse"} onChange={this.onChange}
                                                       name={"email"} value={email}/>
                                                {emailErr &&
                                                <span className={"wui ss-styled-input-input-err"}>Ihre Eingabe ist nicht korrekt</span>}
                                                {emailFormatErr &&
                                                <span className={"wui ss-styled-input-input-err"}>Ihr E-Mail-Format ist falsch</span>}
                                            </div>
                                            <div
                                                className={`wui ss-styled-input margin-below ${phoneErr && "ss-styled-input-input-invalid"}`}>
                                                <input className={"wui ss-styled-input-input"} type={"tel"}
                                                       onBlur={this.onBlur}
                                                       placeholder={"Telefonnummer"} onChange={this.onChange}
                                                       name={"phone"} value={phone}/>
                                                {phoneErr &&
                                                <span className={"wui ss-styled-input-input-err"}>Ihre Eingabe ist nicht korrekt</span>}
                                            </div>
                                        </div>
                                        <div className={"wui ss-contact-ctrl"}>
                                            <div className={"wui ss-img-container"}>
                                                {/*<img className={"wui ss-img"}*/}
                                                {/*     src={"https://images.ctfassets.net/64q0dihi81ut/3oWveGQ9vIMCDo4fh10ESF/21919b4694cc0c382a5b560b28dbad78/book.png"}*/}
                                                {/*     alt={""}/>*/}
                                            </div>
                                            <div className={"wui ss-btn"}>
                                                <button type={"submit"} className={"wui action-button ss-btn"}
                                                        onClick={() => {
                                                            onNext && onNext({
                                                                firstname,
                                                                lastname,
                                                                phone,
                                                                email,
                                                                salutation,
                                                                next
                                                            });
                                                        }}
                                                        disabled={disable}>
                                                    <div>Bewertung erhalten</div>
                                                    <span className={"wui action-button-arrow"}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"wui ss-form-bottom-content"}>
                                        <div className={"wui disclaimer"}>
                                            <p>Dieser Service ist kostenfrei. Mit Klick auf "Bewertung erhalten"
                                                bestätigen Sie die Kenntnisnahme unserer <a className=""
                                                                                            href="https://www.mcmakler.de/agb"
                                                                                            target="_blank">AGBs</a> und <a
                                                    className="" href="https://www.mcmakler.de/datenschutz"
                                                    target="_blank">Datenschutzbestimmungen</a>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"wui ss-footer"}>
                                <div className={"wui ss-footer-content"}>
                                    <img
                                        src={"https://www.heid-immobilienbewertung.de/img/xzert.png.pagespeed.ic.dcLLhaE8be.png"}
                                        alt={""}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WSendStep.propTypes = {
    onNext: PropTypes.func,
    type: PropTypes.oneOf(["send-step"]).isRequired
};

export default WSendStep;