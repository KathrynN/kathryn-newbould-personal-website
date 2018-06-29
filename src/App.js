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
          <h1 className="App-title">Kathryn Newbould</h1>
          <h3>Software Engineer, Podcast Host</h3>
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
      <ButtonToolbar>
        <Button>
          <Glyphicon
            glyph="home"
          />
        </Button>
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
        <Button>
          <Glyphicon
            glyph="music"
          />
        </Button>
        </ButtonToolbar>
    )
  }
}

export default App;
