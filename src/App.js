import React, { Component } from "react";
import Header from './components/Header';
import SideNav from './components/SideNav';
import ColorView from './components/ColorView';
import ColorList from './components/ColorList';
import Pagination from "./components/Pagination";

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper">
          <SideNav />
          <ColorView>
            <ColorList />
            <Pagination />
          </ColorView>
        </div>
      </div>
    );
  }
}

export default App;