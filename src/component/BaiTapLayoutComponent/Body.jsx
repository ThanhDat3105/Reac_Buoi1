import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="container my-5">
          <div className="row">
            <div className="col-4">
              <Item />
            </div>
            <div className="col-4">
              <Item />
            </div>
            <div className="col-4">
              <Item />
            </div>
            <div className="col-4 mt-5">
              <Item />
            </div>
            <div className="col-4 mt-5">
              <Item />
            </div>
            <div className="col-4 mt-5">
              <Item />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
