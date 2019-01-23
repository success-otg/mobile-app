import React from 'react'
import Header from "../../components/header"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ReactSVG from 'react-svg'
import {Modal, List, Button} from 'antd-mobile'

class Infos extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      modal: false
    }
    this.uploadImg = this.uploadImg.bind(this)
    this.showModal = this.showModal.bind(this)
    this.close = this.close.bind(this)
  }
  showModal(){
    this.setState({
      modal: true
    })
  }
  close(){
    this.setState({
      modal: false
    })
  }
  async uploadImg(){
    
  }
  render() {
    const list = [
      {name: '头像', info: this.props.userInfo.avatar, to: '', from: '/infos', onclick: this.showModal},
      {name: '昵称', info: this.props.userInfo.username, to: '', from: '/infos'},
      {name: '生日', info: '', to: '', from: '/infos'},
      {name: '收货地址', info: '修改/添加', to: '', from: '/infos'}
    ]
    return (
      <div>
        <Header title={'个人信息'} path={'/setting'}/>
        <ul className={'list'}>
          {list.map((item, index) =>
            <li key={index} className={'item'}><span>{item.name}</span><Link to={{pathname: item.to, state:{from: item.from}}}><span className={'i-right'}><ReactSVG onClick={item.onclick} src={item.info}/><ReactSVG src={require('../../svg/right-arrow.svg')}/></span></Link></li>)}
        </ul>
        <Modal
          visible={this.state.modal}
          transparent
          footer={[{ text: '取消', onPress: () => { this.setState({modal: false}) }}]}
        >
          <div style={{height: '1.2rem', fontSize: '.24rem'}}>
            <p>拍照</p>
            <p style={{position: 'relative'}}>从手机相册选择<input onChange={this.uploadImg()} ref={'imgInput'} type={'file'} style={{position: 'absolute', top: 0,left: 0, zIndex: 10, opacity:0}}/></p>
          </div>
        </Modal>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

Infos = connect(mapStateToProps)(Infos)

export default Infos