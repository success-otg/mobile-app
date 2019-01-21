import React from 'react'
import Foot from "../../components/foot"
import {Link} from 'react-router-dom'
import './mine.scss'
import ReactSVG from 'react-svg'
import {connect} from 'react-redux'
import localStorage from '../../utils/localStorage'
import {is_Login, Success_Login} from "../../store/actions"

class Mine extends React.Component {

  componentWillMount() {
    if (localStorage.get('userInfo')) {
      this.props.dispatch(is_Login(true))
      this.props.dispatch(Success_Login(localStorage.get('userInfo')))
    }
  }

  render() {
    return (
      <div className={'mine'}>
        <div className={'header'}>
          <div className={'b-top'}></div>
          <div className={'b-bottom'}></div>
          <div className={'top'}>
            <Link to={'/setting'}><span className={'t-left'}><ReactSVG src={require('../../svg/setting.svg')}/></span></Link>
            <span className={'t-right'}><ReactSVG src={require('../../svg/service.svg')}/><ReactSVG
              src={require('../../svg/message.svg')}/></span>
          </div>
          <div style={{display: this.props.is_Login?'none':'block'}} className={'middle'} onClick={this.goLogin}>
            <Link to={{pathname:'/login', state: {from: this.props.location.pathname}}} >
              <ReactSVG src={require('../../svg/girl.svg')}/>
              <span>请点击登录</span>
            </Link>
          </div>
          <div style={{display: this.props.is_Login?'block':'none'}} className={'middle'} >
            <Link to={{pathname:'', state: {from: this.props.location.pathname}}} >
              <ReactSVG src={require('../../svg/default.svg')}/>
            </Link>
            <p>{this.props.userInfo.username}</p>
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

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  is_Login: state.is_Login
})

Mine = connect(mapStateToProps)(Mine)

export default Mine