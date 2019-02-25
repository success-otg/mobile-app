import React from 'react'
import CityHead from "../../components/home/cityHead"
import Classify from "../../components/home/cityClassify"

class City extends React.Component{
  render() {
    return (
      <div className={'city'} style={{backgroundColor: '#f9f9f9'}}>
        <CityHead/>
        <Classify history={this.props.history}/>
      </div>
    );
  }
}

export default City