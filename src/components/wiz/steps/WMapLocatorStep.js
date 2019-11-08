import React, {Component} from "react";
import PropTypes from 'prop-types';

class WMapLocatorStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.options[0].options.default
        };
    }

    render() {
        const {options: [options], onNext, fieldName} = this.props;
        return (
            <div className={"wui step-slider"}>
                <div className={"wui step-slider paper"}>
                    <div className={"wui step-map-img-container"}>
                        <img src={`${process.env.PUBLIC_URL}/svg/${options.options.icon}`} alt={""}
                             className={"wui step-map-image"}/>
                    </div>
                    <div className={"wui step-map-btn-container"}>
                        <div className={"wui step-map-styled"}>
                            <div className={"wui step-map-input-header"}>{options.options.text}</div>
                            <input className={"wui step-map-styled-map"}
                                   value={this.state.value}
                                   type={"text"}
                                   placeholder={"z.B. 12385"}
                                   onChange={e => this.setState({value: e.target.value})}/>
                            <div className={"wui step-map-input-desc"}>{options.options.description}</div>
                        </div>
                        <button type={"submit"} className={"wui action-button"}
                                disabled={this.state.value.length === 0} onClick={() => {
                            onNext && onNext({[fieldName]: this.state.value, next: options.next});
                        }}>
                            Next
                            <span className={"wui action-button-arrow"}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

WMapLocatorStep.propTypes = {
    type: PropTypes.oneOf(["map-locator-step"]).isRequired,
    onNext: PropTypes.func
};

export default WMapLocatorStep;