import React, { Component } from 'react';
import { Button, ButtonToolbar, Glyphicon } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FlexView from "react-flexview";
import 'react-flexview/lib/flexView.css';


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
    if (this.state.navigation === "home") {
      content = (<p> home content </p>)
    } else if (this.state.navigation === "portfolio"){
      content = (<p> portfolio content </p>);
      //   <div className="background" >
      //     <FlexView hAlignContent="center" vAlignContent="bottom" className="info-wrapper header">
      //       <FlexView column hAlignContent="right">
      //         <h3>Software Engineer</h3>
      //         <h1 className="title">Kathryn Newbould</h1>
      //       </FlexView>
      //     <Navigation navigate_to={(x)=>{this.navigate_to(x)}}/>
      //   </FlexView>
      //   <FlexView hAlignContent="center" column>
      //
      //   </FlexView>
      // </div>

    }
    return (
      <div className="background tough_mudder">
      <FlexView vAlignContent="center" hAlignContent="center" column className="full-screen info-wrapper">
          <h1 className="title">Kathryn Newbould</h1>
          <h3>Software Engineer</h3>
          <Navigation navigate_to={(x)=> {this.navigate_to(x)}}/>
          {content}
      </FlexView>
      </div>
    );
  }
}

class Navigation extends Component {

  constructor() {
    super();
    this.state = {
      target: ""
    }
  }

  mousedOver(target) {
    if(target!==this.state.target){
      this.setState({
        target: target
      })
    }
  }

  mouseLeft() {
    const target = "";
    if(target!==this.state.target){
      this.setState({
        target: target
      })
    }
  }

  getButton(description, glyphicon, linkhref, linktargetstyle) {
    return (
      <Button
        onMouseOver={() => this.mousedOver(description)}
        onMouseLeave={() => this.mouseLeft()}
      >
        <a href={linkhref} target={linktargetstyle}>
        <Glyphicon
          glyph={glyphicon}
        />
        </a>
      </Button>
    )
  }
  getNavigationButton(description, glyphicon) {
    return (
      <Button
        onMouseOver={() => this.mousedOver(description)}
        onMouseLeave={() => this.mouseLeft()}
        onClick={() => {
          console.log(description)
          this.props.navigate_to(description)
        }
      }
      >
        <Glyphicon
          glyph={glyphicon}
        />
      </Button>
    )
  }

  render() {
    return (
      <FlexView column hAlignContent="center">
        <ButtonToolbar>
          {this.getNavigationButton("home", "home")}
          {this.getButton("email", "envelope", "mailto:kathrynrnewbould@gmail.com")}
          {this.getButton("CV", "education", "KathrynNewbould2018.pdf", "_blank")}
          {this.getNavigationButton("portfolio", "book")}
        </ButtonToolbar>
        <TextTip tooltip={this.state.target}/>
      </FlexView>
    )
  }
}

class TextTip extends Component {

  getText() {
    const binary = "01101000011010010111001001100101001000000110110101100101";
    let display1 = binary;
    let display2 = "";
    let span = "";
    if(this.props.tooltip) {
      const props_length = this.props.tooltip.length;
      const random_insertion_point = Math.random() * (binary.length-props_length);

      display1 = binary.substring(0, random_insertion_point)
      span = <span id="description">{this.props.tooltip}</span>
      display2 = binary.substring(random_insertion_point + props_length);
    }
    return (<p className="tips">{display1}{span}{display2}</p>);
  }

  render() {
    return this.getText();
  }
}

export default App;
