import React from "react";

class Pagination extends React.Component {
  render() {
    return (
      <ul className='pagination'>
        <li><a href='#' className='current'>1</a></li>
        <li><a href='#'>2</a></li>
        <li><a href='#'>3</a></li>
        <li><a href='#'>4</a></li>
        <li><a href='#'>5</a></li>
      </ul>
    )
  }
}

export default Pagination;