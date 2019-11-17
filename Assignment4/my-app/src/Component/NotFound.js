import React, { Component } from "react";
import MainContainer from "./MainContainer";

export default class NotFound extends Component {
  render() {
    return (
      <MainContainer sidebar="">
        <h1 className="page-header">Not Found</h1>
        <div className="row">
          <div className="col-md-12">
            <span>Page Not Found</span>
          </div>
        </div>
      </MainContainer>
    );
  }
}
