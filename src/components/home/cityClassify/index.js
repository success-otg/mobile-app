import React from 'react'
import {Tabs} from 'antd-mobile'
import {StickyContainer, Sticky} from 'react-sticky'
import './cityClassify.scss'
import Internal from "../internal"

const tabs = [
  {title: '国内'},
  {title: '国际/港澳台'}
]

function renderTabBar(props) {
  return (
    <Sticky>
      {(style)=>(<div style={{...style, zIndex: 1}}><Tabs.DefaultTabBar {...props}/></div>)}
    </Sticky>
  )
}

class Classify extends React.Component{
  render() {
    return (
      <div>
        <StickyContainer>
          <Tabs tabs={tabs} initialPage={0} renderTabBar={renderTabBar}>
            <Internal history={this.props.history} cities={this.props.cities}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff', marginTop: '1.7rem' }}>
              Content of second tab
              咋没有了呢
            </div>
          </Tabs>
        </StickyContainer>
      </div>
    );
  }
}

export default Classify