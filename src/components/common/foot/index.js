import React from 'react'
import {Link} from "react-router-dom"
import './foot.scss'
import ReactSVG from 'react-svg'

class Foot extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      config: [
        {id: 0, path: '/', content: '首页',style: "color: '#25aab0'",src: [require('../../../svg/home.svg'),require('../../../svg/ahome.svg')]},
        {id: 1, path: '/near', content: '附近',style: "color: '#25aab0'",src: [require('../../../svg/near.svg'),require('../../../svg/anear.svg')]},
        {id: 2, path: '/find', content: '发现',style: "color: '#25aab0'",src: [require('../../../svg/find.svg'),require('../../../svg/afind.svg')]},
        {id: 3, path: '/order', content: '订单',style: "color: '#25aab0'",src: [require('../../../svg/order.svg'),require('../../../svg/aorder.svg')]},
        {id: 4, path: '/mine', content: '我的',style: "color: '#25aab0'",src: [require('../../../svg/mine.svg'),require('../../../svg/amine.svg')]}
      ]
    }
  }
  componentWillMount() {
  }

  render(){
    return (
      <div className={'foot'}>
        {/*<ul>
          <li>
            <Link to={'/'}>首页</Link>
          </li>
          <li>
            <Link to={'/near'}>附近</Link>
          </li>
          <li>
            <Link to={'/find'}>发现</Link>
          </li>
          <li>
            <Link to={'/order'}>订单</Link>
          </li>
          <li>
            <Link to={'/mine'}>我的</Link>
          </li>
        </ul>*/}
        <ul>
          {this.state.config.map((foot)=>(
            <li key={foot.id}><Link to={foot.path} className={this.props.index===foot.id?'diy':''}><ReactSVG src={this.props.index === foot.id ? foot.src[1]:foot.src[0]}/>{foot.content}</Link></li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Foot