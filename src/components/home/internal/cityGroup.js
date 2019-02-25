import React from 'react'
import './internal.scss'

class CityGroup extends React.Component{
  render() {
    return (
      <div className={'group'} style={{display: this.props.cities.length>0?'block':'none'}}>
        {this.props.cities.map((section,index)=>(
          <div key={index}>
            <p className={'para'} key={index}>{section.letter}</p>
            <ul>
              {section.list.map((item)=>(
                <li className={'item'} key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }


}

export default CityGroup