import React, { Component } from 'react';
import { Button, ButtonToolbar, Glyphicon, Tooltip } from "react-bootstrap";
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

  getTooltip(string) {
    return (<Tooltip id={string}>HI</Tooltip>)
  }

  render() {
    return (
      <FlexView column hAlignContent="center">
        <ButtonToolbar>
          <Button>
            <a href="mailto:kathrynrnewbould@gmail.com">
            <Glyphicon
              glyph="envelope"
            />
            </a>
          </Button>
          <Button>
            <a href="KathrynNewbould2018.pdf" target="_blank">
              <Glyphicon
                glyph="education"
              />
              </a>
          </Button>
        </ButtonToolbar>
        <TextTip/>
      </FlexView>
    )
  }
}

class TextTip extends Component {
  render() {
    return (
      <p className="tips">
        01101000011010010111001001100101001000000110110101100101
      </p>
    )
  }
}

export default App;
