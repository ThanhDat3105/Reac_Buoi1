import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <h4 className="card-title">Fresh new layout</h4>
            <p className="card-text">
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
