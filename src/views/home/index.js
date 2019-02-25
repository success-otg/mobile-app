import React from 'react'
import Foot from '../../components/common/foot/index'
import MainHead from '../../components/home/mainHead'
import CarouselModel from "../../components/home/carousel"

class Index extends React.Component{
  render() {
    return (
      <div>
        <MainHead/>
        <CarouselModel/>
        <Foot index = {0}/>
      </div>
    );
  }
}
export default Index