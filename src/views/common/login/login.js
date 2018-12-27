import React from 'react'
import './login.scss'
import ReactSVG from 'react-svg'
import {Link} from "react-router-dom"
import FetchUrl from '../../../utils/fetch'
import {Modal, Button, Toast} from "antd-mobile"
import {getCode} from "../../../api"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        phone: '18668137940'
      },
      isMessage: true,
      captchasImg: null
    }
    this.toggleWay = this.toggleWay.bind(this)
    this.goBack = this.goBack.bind(this)
    this.getcaptchas = this.getcaptchas.bind(this)
  }

  componentWillMount() {
    this.getcaptchas()
  }

  async getcaptchas() {
    let res = await getCode()
    console.log(res)
    this.setState({
      captchasImg: res.code
    })
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
    fetchUrl.init().setUrl('http://localhost:9999/admin/login').setMethod('POST').setOvertime(30 * 1000).setHeader({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }).dofetch().then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
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
            <input type={'text'} value={this.state.userInfo.phone} onChange={() => {
            }}/>
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
            <input placeholder={'请输入密码'}/>
            <div className={'c-code'}>
              <input placeholder={'请输入验证码'}/>
              <div className={'c-img'}>
                <img src={this.state.captchasImg} alt={'yzm'}/>
                <img
                  onClick={this.getcaptchas} className={'fresh'} src={require('../../../svg/fresh.svg')} alt={'fresh'}/>
              </div>

            </div>
            <Button className={'c-btn'} onClick={this.diy}>登录</Button>
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

export default Login