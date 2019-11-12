import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../css/confirmation-step.css";

class WConfirmationStep extends Component {
    render() {
        return (
            <div className={'wui outer'}>
                <div className={'wui container border'}>
                    <div className={"wui cs-background"}>
                        <div className={"wuis cs-header outer"}>
                            <div className={"wui cs-header"}>
                                <div className={"wui cs-header-title"}>
                                    Danke! Wir werden Sie in Kürze telefonisch kontaktieren
                                </div>
                            </div>
                        </div>
                        <div className={"wui cs-paper"}>
                            <div className={"wui cs-content"}>
                                <div className={"wui cs-thank-you-container"}>
                                    <div className={"wui cs-thank-you-content"}>
                                        <div className={"wui cs-thank-you-main-content"}>
                                            <div className={"wui cs-main-content"}>
                                                <p className={"wui cs-main-content-line"}>
                                                    <span className={"wui cs-main-content-line-styled"}>
                                                        Sehr geehrter Interessent,
                                                    </span>
                                                </p>
                                                <p className={"wui cs-main-content-line"}>
                                                    um Ihnen eine genaue Analyse Ihrer Immobilie zukommen lassen zu
                                                    können, benötigen wir weitere Daten von Ihnen. Dazu wird Sie in
                                                    Kürze ein Kundenberater telefonisch kontaktieren.
                                                </p>
                                                <p className={"wui cs-main-content-line"}>
                                                    Mit freundlichen Grüßen
                                                    <span className={"wui cs-main-content-line-styled"}>
                                                        Martin Saurer,
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={"wui cs-thank-you-img"}>
                                            <div className={"wui cs-img-container"}>
                                                <img style={{maxWidth: "160px"}} className={"wui cs-img-image"}
                                                     src={"https://images.ctfassets.net/64q0dihi81ut/4zJJMLibX4inVK9JkwA6np/faa32958f98eb1c749bb84e0b0401464/makler.png"}
                                                     alt={""}/>
                                            </div>
                                            <div className={"wui cs-img-info"}>
                                                <div className={"wui cs-img-info-name"}>
                                                    Martin Saurer
                                                </div>
                                                <div className={"wui cs-img-info-profession"}>
                                                    Immobilienmakler
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"wui cs-thank-you-footer"}>
                                        <div className={"wui benefits"}>
                                            <div className={"wui benefits-group"}>
                                                {["Beratung durch Experten", "Über 100.000 zufriedene Eigentümer", "Kostenlose Immobilienbewertung"].map((t, i) =>
                                                    <div className={"wui benefit"} key={i}>
                                                        <img
                                                            src={"https://images.ctfassets.net/64q0dihi81ut/69SYLmbmgWlystBmgl2aaV/edc421ecace814e1a78190ddd84d00c5/checkmark.svg"}
                                                            alt={""} className={"wui benefit-checkmark"}/>
                                                        <span className={"wui benefit-title"}>{t}</span>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"wui cs-footer"}>
                                <div className={"wui cs-footer-content"}>
                                    <img className={""}
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

WConfirmationStep.propTypes = {
    onNext: PropTypes.func,
    type: PropTypes.oneOf(["confirmation-step"]).isRequired
};

export default WConfirmationStep;