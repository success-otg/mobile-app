import React from 'react'
import Header from '../../components/header'

class Setting extends React.Component{

  render() {
    return (
      <div>
        <Header title = '设置' path={'/mine'}/>
      </div>
    )
  }

}

export default Setting