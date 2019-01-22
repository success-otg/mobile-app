import React from 'react'
import Header from '../../components/header'
import SettingList from "../../components/setting-list"
import './mine.scss'
import {signout} from "../../api"
import {Toast} from 'antd-mobile'

class Setting extends React.Component{
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this)
  }

  async signout(){
    localStorage.clear()

    const res = await signout()
    if (res.status === 1){
      Toast.info(res.message, 1)
      this.props.history.push('/login')
    }

  }

  render() {
    const list1 = [
      {name: '个人信息', info: ''},
      {name: '换绑手机', info: ``},
      {name: '社交账号绑定', info: '绑定/解绑'},
      {name: `登录密码`, info: '修改'},
      {name: '支付设置', info: ''},
    ]
    const list2 = [
      {name: '换肤'},
      {name: '安全中心'},
      {name: '通用'},
      {name: `关于`}
    ]

    return (
      <div style={{height: '100vh', backgroundColor: '#f0efed'}}>
        <Header title = '设置' path={'/mine'}/>
        <SettingList list={list1}/>
        <SettingList list={list2}/>
        <button className={'btn'} onClick={this.signout}>退出账号</button>
      </div>
    )
  }

}

export default Setting