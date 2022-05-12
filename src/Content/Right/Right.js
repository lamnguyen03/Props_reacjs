import React, { Component } from "react";
import products_data from "../Data";
import Item from "./Item/Item";

class Right extends Component {
  render() {
    var rows = [];
    for (var i = 0; i < products_data().length; i++) {
      rows.push(
        <Item
          image={products_data()[i].img}
          proName={products_data()[i].name}
          pricePro={products_data()[i].price}
        ></Item>
      );
    }
    return (
      <div id="right-content">
        <h2>Product:</h2>
        <div id="product">
          {rows}
          <div style={{ clear: "both" }}></div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    );
  }
}

export default Right;
