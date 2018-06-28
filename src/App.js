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
          <h1 className="App-title">Kathryn Newbould</h1>
          <h3>Software Engineer, Podcast Host</h3>
          <Navigation/>
      </FlexView>
    );
  }
}

class Navigation extends Component {
  render() {
    return (<ButtonToolbar>
        <Button>
          <Glyphicon
            glyph="home"
          />
        </Button>
        <Button>
          <Glyphicon
            glyph="envelope"
          />
        </Button>
        <Button>
          <Glyphicon
            glyph="education"
          />
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
