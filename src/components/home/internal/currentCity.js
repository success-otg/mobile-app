import React from 'react'
import ReactSVG from 'react-svg'
import './internal.scss'

class CurrentCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: '',
      currentCounty: '',
      showCounty: false
    }
    this.changeCounty = this.changeCounty.bind(this)
    this.checkCounty = this.checkCounty.bind(this)
  }

  changeCounty() {
    this.setState({
      showCounty: !this.state.showCounty
    })
  }

  checkCounty(item) {
    this.setState({
      currentCounty: item,
      showCounty: false
    })
    this.props.history.push('/')
  }

  render() {
    const list = this.props.data[2].list
    return (
      <div>
        <div className={'current'} style={{display: this.props.data[0].show ? 'block' : 'none'}}>
          <div className={'c-top'}><span>当前：{this.props.data[1].title}{}</span><span className={'county'} onClick={this.changeCounty}>切换区县<ReactSVG
            src={require('../../../svg/b-arrow1.svg')}/></span></div>
          <div className={'c-list'} style={{display: this.state.showCounty?'block':'none'}}>
            {list.map((item, index) => {
              return (
                <span key={index} onClick={() => this.checkCounty(item)}>{item}</span>
              )
            })}
          </div>
        </div>
        <div style={{display: this.props.data[0].show ? 'none' : 'block'}}>
          <div className={'title'}>{this.props.data[1].title}</div>
          <div className={'c-list'}>
            {list.map((item, index) => {
              return (
                <span key={index} onClick={() => this.checkCounty(item)}>{item}</span>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentCity