import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import {isBrowser} from 'react-device-detect';

class WHeader extends Component {
    render() {
        const {backArrow, percentage, title, onBack} = this.props;
        console.log(percentage);
        return (
            <div className={'wui header'}>
                {backArrow && isBrowser && <div className={'wui back-btn'} onClick={() => onBack && onBack()}/>}
                <p className={'wui header-title'}>{title}</p>
                <ProgressBar percentage={percentage}/>
            </div>
        )
    }
}

WHeader.defaultProps = {
    backArrow: false,
    percentage: 0
}

WHeader.propTypes = {
    percentage: PropTypes.number,
    title: PropTypes.string,
    backArrow: PropTypes.bool,
    onBack: PropTypes.func
}

export default WHeader
