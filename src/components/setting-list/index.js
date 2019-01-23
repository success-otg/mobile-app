import React from 'react'
import ReactSVG from 'react-svg'
import {Link} from 'react-router-dom'
import './setting-list.scss'

class SettingList extends React.Component{
  render(){
    return (
      <ul className={'list'}>
        {this.props.list.map((item, index) =>
          <li key={index} className={'item'}><span>{item.name}</span><Link to={{pathname: item.to, state:{from: item.from}}}><span className={'i-right'}><span className={'info'}>{item.info}</span><ReactSVG src={require('../../svg/right-arrow.svg')}/></span></Link></li>)}
      </ul>
    )
  }
}

export default SettingList