import React from "react";
import ColorTile from './ColorTile';

class ColorList extends React.Component {

  render() {
    const red = '#ff0000'
    return (
      <ul className='color-list'>
        <li><ColorTile label='#fake label' swatch={<div style={{height: 200, width: 200, background: red, borderTopLeftRadius: 5, borderTopRightRadius: 5}}></div>}/></li>
        <li><ColorTile label='#fake label' swatch={<div></div>}/></li>
        <li><ColorTile label='#fake label' swatch={<div></div>}/></li>
        <li><ColorTile label='#fake label' swatch={<div></div>}/></li>
        <li><ColorTile label='#fake label' swatch={<div></div>}/></li>
        <li><ColorTile label='#fake label' swatch={<div></div>}/></li>
        <li><ColorTile label='#fake label' swatch={<div></div>}/></li>
      </ul>
    )
  }
}

export default ColorList;