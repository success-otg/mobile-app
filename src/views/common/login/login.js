import React from 'react'
import './login.scss'
import ReactSVG from 'react-svg'
import {Button} from "antd-mobile"
import {Link} from "react-router-dom"
import FetchUrl from '../../../utils/fetch'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        phone: '18668137940'
      },
      isMessage: true
    }
    this.toggleWay = this.toggleWay.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  toggleWay() {
    this.setState({
      isMessage: !this.state.isMessage
    })
  }

  goBack() {

  }

  diy() {
    let fetchUrl = new FetchUrl()
    fetchUrl.init().setUrl('http://localhost:9999/admin/login').setMethod('POST').setOvertime(30 * 1000).setHeader({'Accept': 'application/json', 'Content-Type': 'application/json'}).dofetch().then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    let from
    if (this.props.location.state != null) {
      from = this.props.location.state.from
    }
    const urlTo = from || '/home'
    return (
      <div className={'login'}>
        <div className={'l-top'}>
          <Link to={urlTo}><ReactSVG onClick={this.goBack} src={require('../../../svg/del.svg')}/></Link>
          <span>帮助</span>
        </div>
        <div className={'main'}>
          <h1>欢迎登录美团</h1>
          <div className={'m-content'}>
            <span>+86</span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <input type={'text'} value={this.state.userInfo.phone} onChange={() => {
            }}/>
          </div>
          <div style={{display: this.state.isMessage ? '' : 'none'}}>
            <p>未注册的手机号验证后自动创建美团账户</p>
            <Button className={'btn'} type={'primary'}>获取短信验证码</Button>
            <span className={'b-code'} onClick={this.toggleWay}>密码登录</span>
          </div>
          <div className={'code'} style={{display: this.state.isMessage ? 'none' : ''}}>
            <input placeholder={'请输入密码'}/>
            <Button className={'c-btn'} onClick={this.diy}>登录</Button>
            <div className={'m-foot'}>
              <span onClick={this.toggleWay}>验证码登录</span>
              <span>忘记密码</span>
            </div>
          </div>
        </div>
        <div className={'l-foot'}>
          <div className={'logo'}>
            <ReactSVG src={require('../../../svg/wx.svg')}/>
            <ReactSVG src={require('../../../svg/qq.svg')}/>
          </div>
          <p>登录代表你已同意<span>美团用户协议、隐私政策</span></p>
        </div>
      </div>
    );
  }
}

export default Login