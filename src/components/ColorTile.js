import React from "react";

class ColorTile extends React.Component {
  render() {
    return (
      <div className='color-tile'>
        <div className='swatch'>{this.props.swatch}</div>
        <p className='swatch-label'>{this.props.label}</p>
      </div>
    )
  }
}

export default ColorTile;