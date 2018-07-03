import React, { Component } from 'react';
import { Button, ButtonToolbar, Glyphicon } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FlexView from "react-flexview";
import 'react-flexview/lib/flexView.css';
import Navigation from "./Navigation"

class App extends Component {
  constructor() {
    super();
    this.state = {
      navigation: "portfolio"
    }
  }

  navigate_to(destination) {
    this.setState({
      navigation: destination
    })
  }

  render() {
    let content;
    if (this.state.navigation === "portfolio"){
      content = (<p> portfolio content </p>);
    }
    return (
      <div className="background tough_mudder">
        <div className="info-wrapper full-screen">
          <FlexView> {content} </FlexView>
          <FlexView vAlignContent="center"
          hAlignContent="center"
          column className="full-screen"
          id="center_navigation">
            <h1 className="title">Kathryn Newbould</h1>
            <h3>Software Engineer</h3>
            <Navigation navigate_to={(x)=> {this.navigate_to(x)}}/>
          </FlexView>
        </div>
      </div>
    );
  }
}


export default App;
