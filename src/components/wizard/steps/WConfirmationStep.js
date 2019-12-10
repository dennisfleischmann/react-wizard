import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WConfirmationStep extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={'wui outer'}>
                <div className={'wui container border'}>
                    <div className={"wui cs-background"}>
                        <div className={"wuis cs-header outer"}>
                            <div className={"wui cs-header"}>
                                <div className={"wui cs-header-title"}>
                                    {this.props.title}
                                </div>
                            </div>
                        </div>
                        <div className={"wui cs-paper"}>
                            <div className={"wui cs-content"}>
                                <div className={"wui cs-thank-you-container"}>
                                    <div className={"wui cs-thank-you-content"}>
                                        <div className={"wui cs-thank-you-main-content"}>
                                            <div className={"wui cs-main-content"} dangerouslySetInnerHTML={{__html: this.props.html_text}}>
                                                
                                            </div>
                                        </div>
                                        <div className={"wui cs-thank-you-img"}>
                                            <div className={"wui cs-img-container"}>
                                                <img style={{maxWidth: "160px"}} className={"wui cs-img-image"}
                                                     src={this.props.img}
                                                     alt={""}/>
                                            </div>
                                            <div className={"wui cs-img-info"}>
                                                <div className={"wui cs-img-info-name"}>
                                                    {this.props.picture_title}
                                                </div>
                                                <div className={"wui cs-img-info-profession"}>
                                                    {this.props.picture_subtitle}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"wui cs-thank-you-footer"}>
                                        <div className={"wui benefits"}>
                                            <div className={"wui benefits-group"}>
                                                {this.props.claims.map((t, i) =>
                                                    <div className={"wui benefit"} key={i}>
                                                        <img
                                                            src={"/libs/wizard/svg/checkmark.svg"}
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
                                        src={this.props.certsImage}
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