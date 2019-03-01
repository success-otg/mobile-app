import React from 'react'
import CurrentCity from "./currentCity"
import {connect} from 'react-redux'
import localStorage from '../../../utils/localStorage'
import './internal.scss'
import {getCities, getHotCities} from "../../../api"
import CityGroup from "./cityGroup"

class Internal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      county: [{show: true}, {title: this.props.userInfo.city}, {list: ['全城', '一区', '二区', '三区', '四区', '五区', '六区', '七区', '八区', '九区', '十区', '十一区', '十二区', '十三区', '十四区']}],
      hot: [{show: false}, {title: '热门城市'}, {list: []}],
      visit: [{show: false}, {title: '定位/最近访问'}, {list: [this.props.userInfo.city]}],
    }
  }

  componentDidMount() {
    this.getCity()
  }

  async getCity() {
    const res = await getHotCities('hot')
    let hc = []
    res.forEach(item => {
      hc.push(item.name)
    })
    this.setState({
      hot: [{show: false}, {title: '热门城市'}, {list: hc}]
    })
  }

  render() {
    return (
      <div>
        <CurrentCity history={this.props.history} data={this.state.county}/>
        <CurrentCity history={this.props.history} data={this.state.visit}/>
        <CurrentCity history={this.props.history} data={this.state.hot}/>
        <CityGroup history={this.props.history} cities={this.props.cities}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  userInfo: localStorage.get('userInfo') || state.userInfo
})

Internal = connect(mapStateToProps)(Internal)

export default Internal