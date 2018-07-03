import React, { Component } from "react";
import { Button, ButtonToolbar, Glyphicon } from "react-bootstrap";
import FlexView from "react-flexview";
import TextTip from "./TextTip"

export default class Navigation extends Component {

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
