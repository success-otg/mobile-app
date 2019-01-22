import React from 'react'
import ReactSVG from 'react-svg'
import './header.scss'
import {Link} from 'react-router-dom'
class Header extends React.Component{
  render() {
    return (
      <div className={'s-header'}>
        <Link to={this.props.path}><ReactSVG src={require('../../svg/left-arrow.svg')}/></Link>
        <span>{this.props.title}</span>
      </div>
    )
  }
}

export default Header