import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

class ProgressBar extends Component {
    render() {
        const {percentage} = this.props;
        return (
            <div style={{width: `${percentage >= 0 && percentage <= 100 ? percentage : 0}%`}}
                 className={`wui progress-bar ${isMobile && "mobile"}`}/>
        )
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default ProgressBar
