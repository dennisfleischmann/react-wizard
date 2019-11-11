import React from 'react'
import PropTypes from 'prop-types';
import WCard from '../WCard'

const WCardStep = ({fieldName, options, onNext}) => {

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
                    onClick={({value, next}) => onNext && onNext({[fieldName]: value, next})}
                    data={o}/>
            )}
        </div>
    )

};

WCardStep.propTypes = {
    type: PropTypes.oneOf(["cards-step"]).isRequired,
    onNext: PropTypes.func
};

export default WCardStep;
