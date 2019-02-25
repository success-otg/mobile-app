import React from 'react'
import ReactSVG from 'react-svg'
import {Link} from 'react-router-dom'
import './mainHead.scss'
import {connect} from 'react-redux'
import {Carousel, Popover} from 'antd-mobile'
import localStorage from '../../../utils/localStorage'

const Item = Popover.Item
const items = [
  {text: '扫一扫', img: <ReactSVG src={require('../../../svg/a-scan.svg')}/>},
  {text: '付款码', img: <ReactSVG src={require('../../../svg/a-payment.svg')}/>},
  {text: '开发票', img: <ReactSVG src={require('../../../svg/a-invoice.svg')}/>},
  {text: '骑单车', img: <ReactSVG src={require('../../../svg/a-bike.svg')}/>},
  {text: '火车票', img: <ReactSVG src={require('../../../svg/a-train.svg')}/>},
  {text: '机票', img: <ReactSVG src={require('../../../svg/a-plane.svg')}/>}
]
class MainHead extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        tmp: '',
        cond_txt: ''
      },
      city: ''
    }
    this.getPop = this.getPop.bind(this)
  }

  state = {
    visible: true,
    selected: ''
  }

  componentDidMount() {
    let city = this.props.userInfo.city
    if (city) {
      city = city.substring(0, city.length - 1)
      this.setState({
        city: city
      })
    }
    fetch('https://free-api.heweather.net/s6/weather/now?location=hangzhou&key=780ee7cf2d7f4e08b054a78e037e51d4').then(res=>res.json()).then(res=>{
      this.setState({
        weather: {
          tmp: res.HeWeather6[0].now.tmp + '℃',
          cond_txt: res.HeWeather6[0].now.cond_txt
        }
      })
    })

  }

  getPop(){
    this.setState({
      visible: true
    })
  }

  render(){
    return (
      <div className={'mainHead'}>
        <div className={'pos'}>
          <Link to={'/cities'}>{this.state.city} <ReactSVG src={require('../../../svg/b-arrow.svg')}/></Link>
          <span> &nbsp;{this.state.weather.cond_txt}&nbsp;{this.state.weather.tmp}</span>
        </div>
        <div className={'search'}>
          <Carousel className="my-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                    // style={{border: '1px solid red', display: 'inline-block'}}
          >
            <div className="v-item"><ReactSVG src={require('../../../svg/search.svg')}/>carousel 1</div>
            <div className="v-item"><ReactSVG src={require('../../../svg/search.svg')}/>carousel 2</div>
            <div className="v-item"><ReactSVG src={require('../../../svg/search.svg')}/>carousel 3</div>
          </Carousel>
      </div>

        <Popover overlay={[(items.map((item,index)=>(
          <Item key={index} value={item.text}  icon={item.img}>{item.text}</Item>
        )))]}>
          <div className={'add'} onClick={this.getPop}>
            <ReactSVG src={require('../../../svg/plus.svg')}/>
          </div>
        </Popover>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: localStorage.get('userInfo')||state.userInfo
})

MainHead = connect(mapStateToProps)(MainHead)

export default MainHead