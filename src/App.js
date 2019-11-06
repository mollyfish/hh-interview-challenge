import React, { Component } from "react";
import Header from './components/Header';
import SideNav from './components/SideNav';
import ColorList from './components/ColorList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SideNav />
        <ColorList />
      </React.Fragment>
    );
  }
}

export default App;