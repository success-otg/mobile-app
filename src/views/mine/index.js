import React from 'react'
import Foot from "../../components/foot"
import {Link} from 'react-router-dom'
import './mine.scss'
import ReactSVG from 'react-svg'

class Mine extends React.Component {
  render() {
    console.log(this)
    return (
      <div className={'mine'}>
        <div className={'header'}>
          <div className={'b-top'}></div>
          <div className={'b-bottom'}></div>
          <div className={'top'}>
            <span className={'t-left'}><ReactSVG src={require('../../svg/setting.svg')}/></span>
            <span className={'t-right'}><ReactSVG src={require('../../svg/service.svg')}/><ReactSVG
              src={require('../../svg/message.svg')}/></span>
          </div>
            <div className={'middle'} onClick={this.goLogin}>
              <Link to={{pathname:'/login', state: {from: this.props.location.pathname}}} >
                <ReactSVG src={require('../../svg/girl.svg')}/>
                <span>请点击登录</span>
              </Link>
            </div>
          <ul className={'bottom'}>
            <li className={'item'}><ReactSVG src={require('../../svg/star.svg')}/><span>收藏</span>
            </li>
            <li className={'item'}><ReactSVG src={require('../../svg/evaluate.svg')}/><span>评价</span>
            </li>
            <li className={'item'}><ReactSVG src={require('../../svg/browse.svg')}/><span>最近浏览</span>
            </li>
          </ul>
          <Foot index={4}/>
        </div>
      </div>
    );
  }
}

export default Mine