import React from 'react'
import ReactSVG from 'react-svg'
import './setting-list.scss'

class SettingList extends React.Component{
  render(){
    return (
      <ul className={'list'}>
        {this.props.list.map((item, index) =>
        <li key={index} className={'item'}><span>{item.name}</span><span className={'i-right'}><span className={'info'}>{item.info}</span><ReactSVG src={require('../../svg/right-arrow.svg')}/></span></li>)}
      </ul>
    )
  }
}

export default SettingList