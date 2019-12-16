import React, {Component} from 'react'
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    render() {
        const {percentage} = this.props;
        return (
            <div style={{width: `${percentage >= 0 && percentage <= 100 ? percentage : 0}%`}}
                 className={`wui progress-bar`}/>
        )
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default ProgressBar
