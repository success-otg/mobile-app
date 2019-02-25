import React from 'react'
import ReactSVG from 'react-svg'
import {Link} from 'react-router-dom'
import './cityHead.scss'

class CityHead extends React.Component{
  render() {
    return (
      <div className={'cityHead'}>
        <Link to={'/' +
        ''}><ReactSVG svgClassName={'s-icon'} src={require('../../../svg/del.svg')}/></Link>
        <span><ReactSVG src={require('../../../svg/search1.svg')}/>&nbsp;&nbsp;城市名/拼音</span>
      </div>
    )
  }
}

export default CityHead