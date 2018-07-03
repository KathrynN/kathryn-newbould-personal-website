import React, { Component } from "react";
export default class TextTip extends Component {

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
