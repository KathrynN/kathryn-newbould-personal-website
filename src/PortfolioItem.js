import React, { Component } from "react";
import FlexView from "react-flexview";
import { Image } from "react-bootstrap";
import braid_screenshot from "./images/braid_screenshot.png";

export default class TextTip extends Component {

  render() {
    const item_title = "Braid"
    const item_sub_title = "Better YouTube subscription monitoring"
    const description = "Written in React, it uses channel, user or playlist id to organise content by date so you can always stay up-to-date."
    return (
      <div className="portfolio"
      onClick= {() => {
        window.open("http://braid-youtube.s3-website.eu-west-2.amazonaws.com/", "_blank")
      }}
      >
      <h1>{item_title}</h1>
      <FlexView
        >
        <FlexView column>
          <h2>{item_sub_title}</h2>
          <p>{description}</p>
          <Image src={braid_screenshot} rounded />
        </FlexView>
      </FlexView>
      </div>
    )
  }
}
