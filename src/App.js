import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FlexView from "react-flexview";
import 'react-flexview/lib/flexView.css';
import Navigation from "./Navigation"
import PortfolioItem from "./PortfolioItem"

class App extends Component {
  constructor() {
    super();
    this.state = {
      navigation: "home"
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
      content = <PortfolioItem/>;
    }
    return (
      <div className="background tough_mudder">
        <div className="info-wrapper full-screen">
        <header className="App-header">
          <FlexView vAlignContent="center"
          hAlignContent="center"
          column className="full-screen"
          >
            <h1 className="title">Kathryn Newbould</h1>
            <h3>Software Engineer</h3>
            <Navigation navigate_to={(x)=> {this.navigate_to(x)}}/>
          </FlexView>
        </header>

            {content}
        </div>
      </div>
    );
  }
}


export default App;
