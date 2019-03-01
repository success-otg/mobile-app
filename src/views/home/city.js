import React from 'react'
import CityHead from "../../components/home/cityHead"
import Classify from "../../components/home/cityClassify"
import {getCities} from "../../api"

class City extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      isShowToast: false,//是否显示弹窗
      toast: '',//弹窗的内容
      startY: 0,
      endY: 0,
      touchStartSelected: '',
      touchMoveSelected: '',
      saveLetterIndex: 0,
      startY2: 0,
      endY2: 0,
      scroll: null
    }
  }

  componentDidMount() {
    this.getAllCities()
  }

  async getAllCities(){
    const result = await getCities('group')
    let cities = []
    let keys = Object.keys(result).sort()
    keys.map(i=>{
      let obj = {}
      obj.letter=i
      obj.list = result[i]
      cities.push(obj)
      return ''
    })
    // console.log(cities)
    this.setState({
      cities: cities
    })
  }

  render() {
    return (
      <div className={'city'} style={{backgroundColor: '#f9f9f9'}}>
        <CityHead/>
        <Classify history={this.props.history} cities={this.state.cities}/>
        <div style={{position: 'fixed', top: '1.75rem', right: 0, zIndex: 9}}>
          <ul style={style.letterList}>
            <li style={style.item}>区县选择</li>
            <li style={style.item}>热门城市</li>
            {this.state.cities.map(item=>(
              <li key={item.letter}>{item.letter}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const style = {
  letterList:{
    // border: '1px solid red',
    width: '.4rem',
    paddingTop:'1.5rem',
    textAlign: 'center',
    height: '12rem',
    fontSize: '.28rem',
    backgroundColor: '#fff',
    color: '#00a1a2'
  },
  li:{

  },
  item:{
    margin: '.1rem 0',
    lineHeight: '1.5',
    fontSize: '.2rem'
  }
}

export default City
