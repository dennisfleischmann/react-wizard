import React from 'react'
import PropTypes from 'prop-types'

const WCard = ({data, onClick}) => {
    const {value , options: {icon, text, size}, next} = data;
    let css = "";
    if (size === "s") {
        css = "small";
    }
    
    return (
        <div className={`wui card ${css}`} onClick={() => onClick && onClick({value: text, next})}>
            <div className={`wui card-container`}>
                <div className={"wui card-icon-container"}>
                    <img className={"wui card-icon-img"} src={`${process.env.PUBLIC_URL}${icon}`}
                         alt={text}/>
                </div>
                <div className={"wui card-title"} dangerouslySetInnerHTML={{__html: value}}>
                </div>
            </div>
        </div>
    )
};

WCard.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default WCard
