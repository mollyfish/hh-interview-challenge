import React from "react";

class ColorView extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default ColorView;