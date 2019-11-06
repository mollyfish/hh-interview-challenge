import React from "react";

class SideNav extends React.Component {
  render() {
    return (
      <nav className='sideNav' data-testid='sidenav-testid'>
        <button className='picker'>Random Color</button>
        <ul>
          <li>Red</li>
          <li>Orange</li>
          <li>Yellow</li>
          <li>Green</li>
          <li>Blue</li>
          <li>Purple</li>
          <li>Brown</li>
          <li>Gray</li>
        </ul>
      </nav>
    )
  }
}

export default SideNav;