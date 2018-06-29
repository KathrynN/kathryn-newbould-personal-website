import React, { Component } from 'react';
import { Button, ButtonToolbar, Glyphicon } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FlexView from "react-flexview";
import 'react-flexview/lib/flexView.css';


class App extends Component {
  render() {
    return (
      <FlexView vAlignContent="center" hAlignContent="center" column className="info-wrapper">
          <h1 className="title">Kathryn Newbould</h1>
          <h3>Software Engineer</h3>
          <Navigation/>
      </FlexView>
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

  render() {
    return (
      <FlexView column hAlignContent="center">
        <ButtonToolbar>
          <Button
            onMouseOver={() => this.mousedOver("email")}
            onMouseLeave={() => this.mouseLeft()}
          >
            <a href="mailto:kathrynrnewbould@gmail.com">
            <Glyphicon
              glyph="envelope"
            />
            </a>
          </Button>
          <Button
            onMouseOver={() => this.mousedOver("CV")}
            onMouseLeave={() => this.mouseLeft()}
          >
            <a href="KathrynNewbould2018.pdf" target="_blank">
              <Glyphicon
                glyph="education"
              />
              </a>
          </Button>
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
