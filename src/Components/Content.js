import React, { Component } from "react";
import Right from "../Content/Right/Right";

class Content extends Component {
  render() {
    return (
      <div id="content">
        <Right/>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}
export default Content;
