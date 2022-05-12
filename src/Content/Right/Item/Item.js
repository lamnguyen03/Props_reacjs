import React, { Component } from 'react'

export default class Item extends Component {
  Noti() {
    alert("Chúc bạn luôn vui vẻ !!!")
  }
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="product">
          <div className="text"></div>
          <div className="p-img">
            <img src={this.props.image} width={200} height={200} />
          </div>{" "}
          <div className="p-name">
            <a href="item.html">{this.props.proName}</a>
          </div>
          <div className="text">
            <div className="p-cart">{this.props.pricePro}</div>
            <div className="p-price">Please Call</div>
            <div className="button" onClick={this.Noti}>
              <button>Click mình đi!</button>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}



