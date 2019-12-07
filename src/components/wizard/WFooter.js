import React, {Component} from 'react'

class WFooter extends Component {

    super(props) {

    }
    render() {
        return (
            <div className={'wui footer'}>
                <div className={'wui footer-benefits'}>
                    <div className={'wui benefits-group'}>
                        {this.props.claims.map((t, index) =>
                            <div className={'wui benefit'} key={index}>
                                <img
                                    src={"svg/checkmark.svg"}
                                    className="wui benefit-checkmark" alt=""/>
                                <p className={'wui benefit-title'}>{t}</p>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

WFooter.propTypes = {};

export default WFooter;
