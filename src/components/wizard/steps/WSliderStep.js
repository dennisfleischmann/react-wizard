import React, {Component} from "react";
import PropTypes from 'prop-types';
import WSlider from "../WSlider";
import {isBrowser, isMobile} from 'react-device-detect';
import WBottomBtnsBar from "../WBottomBtnsBar";

class WSliderStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.options[0].options.default
        };
    }

    render() {
        const {onNext, fieldName, isBackVisible, onBack} = this.props;
        const {options: {range: {min, max}, icon, unit, placeholder, button_title}, next} = this.props.options[0];
        const {value} = this.state;
        return (
            <div className={"wui step-slider"}>
                <div className={"wui step-slider paper"}>
                    <div className={"wui slider-measure"}>
                        <WSlider min={min} max={max} unit={unit} step={1} value={value > max ? max : value < min ? min : value}
                                 onChange={d => this.setState({value: d})}
                                 style={{width: "100%"}}/>
                        <div className={"wui slider-measure-input"}>
                            <span className={"wui slider-measure-input-label"}>Alternativ eintippen</span>
                            <div className={"wui slider-measure-input-styled"}>
                                <input pattern={"\d"} type={"text"}
                                       className={"wui slider-measure-input-styled-input"}
                                       onChange={e => {
                                           if(parseInt(e.target.value, 10)) {
                                            this.setState({value: parseInt(e.target.value, 10)})
                                           }
                                           if(!e.target.value) {
                                            this.setState({value: 0})
                                           }
                                           
                                       }}
                                       value={this.state.value}/>
                                <span className={"wui slider-measure-input-styled-unit"} dangerouslySetInnerHTML={{__html: placeholder}}></span>
                            </div>
                        </div>
                    </div>
                    <div className={"wui slider-ctrl"}>
                        <div className={"wui slider-ctrl-img-container"}>
                            <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={``}
                                 className={"wui slider-ctrl-img"}/>
                        </div>
                        {isBrowser && <button type={"submit"} className={"wui action-button"}
                                              onClick={() => onNext && onNext({value: this.state.value, next, fieldName})}>
                            {button_title || button_title}
                            <span className={"wui action-button-arrow"}/>
                        </button>}
                    </div>
                </div>
                {isMobile && <WBottomBtnsBar
                    isBackVisible={isBackVisible}
                    onBack={() => onBack && onBack()}
                    nextBtnTitle={button_title || button_title}
                    btnProps={{
                        onClick: () => onNext && onNext({value: this.state.value, next, fieldName})
                    }}/>}
            </div>
        );
    }
}

WSliderStep.propTypes = {
    onNext: PropTypes.func,
    onBack: PropTypes.func,
    isBackVisible: PropTypes.bool
};

export default WSliderStep;