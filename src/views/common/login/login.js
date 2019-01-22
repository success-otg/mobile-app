import React from 'react'
import './login.scss'
import ReactSVG from 'react-svg'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import {Modal, Button, Toast} from "antd-mobile"
import {getCode, accountLogin} from "../../../api"
import {Success_Login, is_Login} from '../../../store/actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      code: '',
      isMessage: true,
      captchasImg: null,
      loginTo: '/mine',
    }
    this.toggleWay = this.toggleWay.bind(this)
    this.getcaptchas = this.getcaptchas.bind(this)
    this.doLogin = this.doLogin.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
  }

  componentWillMount() {
    this.getcaptchas()
  }

  async getcaptchas() {
    let res = await getCode()
    this.setState({
      captchasImg: res.code
    })
  }

  toggleWay() {
    this.setState({
      isMessage: !this.state.isMessage
    })
  }

  handleChange1(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleChange2(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleChange3(e) {
    this.setState({
      code: e.target.value
    })
  }

  async doLogin() {
    if (!this.state.username){
      Toast.info('请输入手机号/用户名/邮箱', 1, null, false)
      return ''
    }else if (!this.state.password){
      Toast.info('请输入密码', 1, null, false)
      return ''
    } else if (!this.state.code){
      Toast.info('请输入验证码', 1, null, false)
      return ''
    }

    const res = await accountLogin(this.state.username,this.state.password, this.state.code)

    
    if (!res.userInfo.user_id){
      Toast.info('登录失败', 1, null, false)
      this.getcaptchas()
    } else {
      const loginTo = this.props.location.state.from
      this.props.history.push(loginTo)
      this.props.dispatch(Success_Login(res.userInfo))
      this.props.dispatch(is_Login(true))
}
}

render(){
let from
if (this.props.location.state != null) {
      from = this.props.location.state.from
    }
    const urlTo = from || '/home'
    const prompt = Modal.prompt
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
            <input type={'text'} ref={'username'} onChange={this.handleChange1} value={this.state.username}/>
          </div>
          <div style={{display: this.state.isMessage ? '' : 'none'}}>
            <p>未注册的手机号验证后自动创建美团账户</p>
            <Button className={'btn'} type={'primary'}
                    onClick={() => prompt('验证码', <div className={'auth-code'}><img src={this.state.captchasImg}
                                                                                   alt={'yzm'}/><img
                      onClick={this.getcaptchas} className={'fresh'} src={require('../../../svg/fresh.svg')}
                      alt={'fresh'}/></div>, [
                      {text: '取消'},
                      {
                        text: '确定', onPress: () => {
                          Toast.info('我没有钱买短信接口！穷！！！', 2, null, false)
                        }
                      }
                    ])}>获取短信验证码</Button>
            <span className={'b-code'} onClick={this.toggleWay}>密码登录</span>
          </div>
          <div className={'code'} style={{display: this.state.isMessage ? 'none' : ''}}>
            <input type={'password'} placeholder={'请输入密码'} onChange={this.handleChange2} value={this.state.password}/>
            <div className={'c-code'}>
              <input placeholder={'请输入验证码'} onChange={this.handleChange3} value={this.state.code}/>
              <div className={'c-img'}>
                <img src={this.state.captchasImg} alt={'yzm'}/>
                <img
                  onClick={this.getcaptchas} className={'fresh'} src={require('../../../svg/fresh.svg')} alt={'fresh'}/>
              </div>

            </div>
            <Button className={'c-btn'} onClick={this.doLogin}>登录</Button>
            <div className={'m-foot'}>
              <span onClick={this.toggleWay}>短信验证码登录</span>
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

const mapStateToProps = (state) => ({
userInfo: state.userInfo,
is_Login: state.is_Login
})

Login = connect(mapStateToProps)(Login)

export default Login