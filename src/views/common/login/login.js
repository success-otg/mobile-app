import React from 'react'
import './login.scss'
import ReactSVG from 'react-svg'
import {Button} from "antd-mobile"

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
  }

  toggleWay() {
    this.setState({
      isMessage: !this.state.isMessage
    })
  }

  render() {
    return (
      <div className={'login'}>
        <div className={'l-top'}>
          <ReactSVG src={require('../../../svg/del.svg')}/>
          <span>帮助</span>
        </div>
        <div className={'main'}>
          <h1>欢迎登录美团</h1>
          <div className={'m-content'}>
            <span>+86</span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <input type={'text'} value={this.state.userInfo.phone} onChange={()=>{}}/>
          </div>
          <div style={{display: this.state.isMessage?'': 'none'}}>
            <p>未注册的手机号验证后自动创建美团账户</p>
            <Button className={'btn'} type={'primary'}>获取短信验证码</Button>
            <span className={'b-code'} onClick={this.toggleWay}>密码登录</span>
          </div>
          <div className={'code'} style={{display: this.state.isMessage?'none': ''}}>
            <input placeholder={'请输入密码'}/>
            <Button className={'c-btn'}>登录</Button>
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