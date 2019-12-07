import React from 'react'
import PropTypes from 'prop-types';
import WCard from '../WCard'
import {isMobile} from "react-device-detect";
import WBottomBtnsBar from "../WBottomBtnsBar";

const WCardStep = ({fieldName, options, onNext, onBack, isBackVisible}) => {

    if (!Array.isArray(options)) {
        throw Error("Options must be an array!");
    }

    let css = "";
    if (options[0].options.size === "m") {
        css = "medium";
    }

    return (
        <div className={`wui content-container ${css}`}>
            {options.map((o, index) =>
                <WCard
                    key={index}
                    onClick={({value, next}) => onNext && onNext({value, next, fieldName})}
                    data={o}/>
            )}
            {isMobile && isBackVisible && <WBottomBtnsBar onBack={() => onBack && onBack()} isNextVisible={false}/>}
        </div>
    )

};

WCardStep.propTypes = {
    type: PropTypes.oneOf(["cards-step"]).isRequired,
    onNext: PropTypes.func,
    onBack: PropTypes.func,
};

export default WCardStep;
