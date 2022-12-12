import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container bg-light mt-4 p-5">
          <h1>A warm welcome!</h1>
          <p style={{ fontSize: "25px" }}>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <a
            style={{ fontSize: "1.25rem" }}
            className="btn btn-primary text-light"
          >
            Call to action
          </a>
        </div>
      </div>
    );
  }
}
