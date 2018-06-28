import React, { Component } from 'react';
import { Glyphicon } from "react-bootstrap";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import "react-flexview/lib/flexView.css";
import FlexView from "react-flexview";

class App extends Component {
  render() {
    return (
      <FlexView vAlignContent="center" hAlignContent="center" column className="info-wrapper">
          <h1 className="App-title">Kathryn Newbould</h1>
          <h3>Software Engineer, Podcast Host</h3>
          <Navigation/>
      </FlexView>
    );
  }
}

class Navigation extends Component {
  render() {
    return (<div>
        <p>Hello</p>
        </div>
    )
  }
}

export default App;
