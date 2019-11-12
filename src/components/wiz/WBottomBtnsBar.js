import React from 'react';
import PropTypes from 'prop-types';

const WBottomBtnsBar = ({onBack, isBackVisible, btnProps, nextBtnTitle}) => <div className={"wui bottom-btns-bar"}>
    <button type={"submit"} className={"wui action-button"} {...btnProps}>
        {nextBtnTitle ? nextBtnTitle : "Next"}
        <span className={"wui action-button-arrow"}/>
    </button>
    {isBackVisible && <button type={"button"} className={"wui back-btn"} onClick={() => onBack && onBack()}/>}
</div>;

WBottomBtnsBar.defaultProps = {
    isBackVisible: true
};

WBottomBtnsBar.propTypes = {
    onBack: PropTypes.func,
    isBackVisible: PropTypes.bool,
    btnProps: PropTypes.object,
    nextBtnTitle: PropTypes.string
};

export default WBottomBtnsBar;