import React, { Component } from "react";
import { sortBy } from "lodash";

import MainContainer from "./MainContainer";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }
  componentDidMount = () => {
    fetch("https://stormy-cliffs-97970.herokuapp.com/teams")
      .then(res => res.json())
      .then(data => {
        this.setState({
          teams: sortBy(data, [
            function(team) {
              return parseInt(team.TeamName.match(/\d+/));
            }
          ])
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <MainContainer highlight="Teams">
        <h1 className="page-header">Teams</h1>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Projects</th>
                  <th>Employees</th>
                  <th>Team Lead</th>
                </tr>
                {this.state.teams.map(team => {
                  return (
                    <tr key={team._id}>
                      <td>{team.TeamName}</td>
                      <td>
                        <ul>
                          {team.Projects.map(project => {
                            return (
                              <li key={project._id}>{project.ProjectName}</li>
                            );
                          })}
                        </ul>
                      </td>
                      <td>{team.Employees.length} employees</td>
                      <td>
                        {team.TeamLead.FirstName + " " + team.TeamLead.LastName}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
}
