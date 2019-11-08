import React, {Component} from 'react'

class WFooter extends Component {
  render() {
    return (
      <div className={'wui footer'}>
        <div className={'wui footer-benefits'}>
          <div className={'wui benefits-group'}>
            {[...Array(3)].map((_, index) => <div className={'wui benefit'} key={index}>
              <img
                src="https://images.ctfassets.net/64q0dihi81ut/69SYLmbmgWlystBmgl2aaV/edc421ecace814e1a78190ddd84d00c5/checkmark.svg"
                className="jsx-3104379550 benefit__checkmark" alt=""/>
              <p className={'wui title'}> Expert Advice {index + 1}</p>
            </div>)}
          </div>
        </div>
      </div>
    )
  }
}

WFooter.propTypes = {}

export default WFooter
