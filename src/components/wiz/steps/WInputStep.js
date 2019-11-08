import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WInputStep extends Component {

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
                    <div className={"wui step-input-img-container"}>
                        <img src={`${process.env.PUBLIC_URL}/svg/${options.options.icon}`} alt={""}
                             className={"wui step=input-image"}/>
                    </div>
                    <div className={"wui step-input-btn-container"}>
                        <div className={"wui step-input-styled"}>
                            <input className={"wui step-input-styled-input"}
                                   value={this.state.value}
                                   type={"text"}
                                   onChange={e => this.setState({value: e.target.value})}/>
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

WInputStep.propTypes = {
    type: PropTypes.oneOf(["input-step"]).isRequired,
    onNext: PropTypes.func
};

export default WInputStep;