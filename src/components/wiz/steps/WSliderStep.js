import React, {Component} from "react";
import PropTypes from 'prop-types';
import WSlider from "../WSlider";

class WSliderStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.options[0].options.default
        };
    }

    render() {
        const {onNext, fieldName} = this.props;
        const {options: {range: {min, max}, icon}, next} = this.props.options[0];
        const {value} = this.state;
        return (
            <div className={"wui step-slider"}>
                <div className={"wui step-slider paper"}>
                    <div className={"wui slider-measure"}>
                        <WSlider min={min} max={max} step={1} value={value}
                                 onChange={d => this.setState({value:d})}
                                 style={{width: "100%"}}/>
                        <div className={"wui slider-measure-input"}>
                            <span className={"wui slider-measure-input-label"}>ABCD</span>
                            <div className={"wui slider-measure-input-styled"}>
                                <input pattern={"\d"} type={"number"}
                                       className={"wui slider-measure-input-styled-input"}
                                       onChange={e => {
                                           this.setState({value: e.target.value})
                                       }}
                                       value={value}/>
                                <span className={"wui slider-measure-input-styled-unit"}>m<sup>2</sup></span>
                            </div>
                        </div>

                    </div>
                    <div className={"wui slider-ctrl"}>
                        <div className={"wui slider-ctrl-img-container"}>
                            <img src={`${process.env.PUBLIC_URL}/svg/${icon}`} alt={``}
                                 className={"wui slider-ctrl-img"}/>
                        </div>
                        <button type={"submit"} className={"wui action-button"}
                                onClick={() => onNext && onNext({[fieldName]: this.state.value, next})}>
                            Next
                            <span className={"wui action-button-arrow"}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

WSliderStep.propTypes = {
    onNext: PropTypes.func
};

export default WSliderStep;