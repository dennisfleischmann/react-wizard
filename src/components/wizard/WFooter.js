import React, {Component} from 'react'

class WFooter extends Component {
    render() {
        return (
            <div className={'wui footer'}>
                <div className={'wui footer-benefits'}>
                    <div className={'wui benefits-group'}>
                        {["Beratung durch Experten", "Über 100.000 zufriedene Eigentümer", "Kostenlose Immobilienbewertung"].map((t, index) =>
                            <div className={'wui benefit'} key={index}>
                                <img
                                    src="https://images.ctfassets.net/64q0dihi81ut/69SYLmbmgWlystBmgl2aaV/edc421ecace814e1a78190ddd84d00c5/checkmark.svg"
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
