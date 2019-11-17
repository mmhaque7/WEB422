import React, { Component } from "react";
import EmployeesPanel from "./EmployeesPanel";
import ProjectsPanel from "./ProjectsPanel";
import TeamsPanel from "./TeamsPanel";
import MainContainer from "./MainContainer";

export default class Overview extends Component {
  render() {
    return (
      <MainContainer highlight="Overview">
        <h1 className="page-header">Overview</h1>
        <div className="row">
          <div className="col-md-4">
            <ProjectsPanel id="uuid.v4()" />
          </div>
          <div className="col-md-4">
            <TeamsPanel />
          </div>
          <div className="col-md-4">
            <EmployeesPanel />
          </div>
        </div>
      </MainContainer>
    );
  }
}
