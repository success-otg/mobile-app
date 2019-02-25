import React from 'react'
import {Carousel} from 'antd-mobile'
import '../../../utils/fetch'

class CarouselModel extends React.Component{
  state = {
    images: [require('../../../imgs/c1.jpg'),require('../../../imgs/c2.jpg'),require('../../../imgs/c3.jpg'),require('../../../imgs/c4.jpg')],
    imageHeight: '3rem'
  }

  componentDidMount() {

  }

  render() {
    return (
      <Carousel autoplay={true} infinite={true} >
        {this.state.images.map((val,index)=>(
          <a key={index} href='http://localhost:3001' style={{display: 'inline-block', width: '100%', height: this.state.imageHeight}}><img src={val} alt={''} style={{width: '100%',height: this.state.imageHeight, verticalAlign: 'top'}}/></a>
        ))}
      </Carousel>
    )
  }
}

export default CarouselModel