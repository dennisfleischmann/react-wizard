import React, {Component} from "react";
import PropTypes from 'prop-types';
import {isBrowser, isMobile} from 'react-device-detect';
import WBottomBtnsBar from "../WBottomBtnsBar";

class WMapLocatorStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.options[0].options.default
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({target: {value}}) => {
        if (value.length === 0) {
            this.setState({value: ""});
        } else if (value.length <= 5 && value.length > 0) {
            if (parseInt(value) > 0) {
                this.setState({value: parseInt(value)});
            }
        }
    };

    render() {
        const {options: [options], onNext, fieldName, onBack} = this.props;
        return (
            <div className={"wui step-map"}>
                <div className={"wui step-map paper"}>
                    <div className={"wui step-map-img-container"}>
                        <img src={`${process.env.PUBLIC_URL}/${options.options.icon}`} alt={""}
                             className={"wui step-map-image"}/>
                    </div>
                    <div className={"wui step-map-btn-container"}>
                        <div className={"wui step-map-styled"}>
                            <div className={"wui step-map-input-header"}>{options.options.text}</div>
                            <input className={"wui step-map-styled-map"}
                                   value={this.state.value}
                                   type={"text"}
                                   placeholder={"z.B. 12385"}
                                   onChange={this.handleChange}/>
                            <div className={"wui step-map-input-desc"}>{options.options.description}</div>
                        </div>
                        {isBrowser && <button type={"submit"} className={"wui action-button"}
                                              disabled={this.state.value.length < 5} onClick={() => {
                            onNext && onNext({value: this.state.value, next: options.next, fieldName});
                        }}>
                            {options.options.button_title || "Next"}
                            <span className={"wui action-button-arrow"}/>
                        </button>}
                    </div>
                </div>
                {isMobile && <WBottomBtnsBar
                    onBack={() => onBack && onBack()}
                    btnProps={{
                        onClick: () => onNext && onNext({value: this.state.value, next: options.next, fieldName}),
                        disabled: this.state.value.length < 5
                    }}/>}
            </div>
        );
    }
}

WMapLocatorStep.propTypes = {
    type: PropTypes.oneOf(["map-locator-step"]).isRequired,
    onNext: PropTypes.func,
    onBack: PropTypes.func,
};

export default WMapLocatorStep;