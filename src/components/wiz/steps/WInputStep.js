import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isBrowser, isMobile} from "react-device-detect";
import WBottomBtnsBar from "../WBottomBtnsBar";

class WInputStep extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.options[0].options.default,
            text: props.options[0].options.text,
        };
    }

    render() {
        const {options: [options], onNext, fieldName, onBack} = this.props;
        return (
            <div className={"wui step-slider"}>
                <div className={"wui step-slider paper"}>
                    <div className={"wui step-input-img-container"}>
                        <img src={`${process.env.PUBLIC_URL}/svg/${options.options.icon}`} alt={""}
                             className={"wui step-input-image"}/>
                    </div>
                    <div className={"wui step-input-btn-container"}>
                        <div className={"wui step-input-header"}>{options.options.text}</div>
                        <div className={"wui step-input-styled"}>
                            <input className={"wui step-input-styled-input"}
                                   value={this.state.value}
                                   type={"text"}
                                   placeholder={options.options.placeholder}
                                   onChange={e => this.setState({value: e.target.value})}/>
                            <div className={"wui step-input-desc"}>{options.options.description || "This is desc"}</div>
                        </div>
                        {isBrowser && <button type={"submit"} className={"wui action-button"}
                                              disabled={this.state.value.length === 0} onClick={() => {
                            onNext && onNext({[fieldName]: this.state.value, next: options.next});
                        }}>
                            {options.options.button_title || "Next"}
                            <span className={"wui action-button-arrow"}/>
                        </button>}
                    </div>
                </div>
                {isMobile && <WBottomBtnsBar
                    onBack={() => onBack && onBack()}
                    btnProps={{
                        onClick: () => onNext && onNext({[fieldName]: this.state.value, next: options.next}),
                        disabled: this.state.value.length === 0
                    }}/>}
            </div>
        );
    }
}

WInputStep.propTypes = {
    type: PropTypes.oneOf(["input-step"]).isRequired,
    onNext: PropTypes.func,
    onBack: PropTypes.func,
};

export default WInputStep;