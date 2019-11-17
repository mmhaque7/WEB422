import React, { Component } from "react";
import moment from "moment";
import { sortBy } from "lodash";
import { Link } from "react-router-dom";
export default class ProjectsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount = () => {
    fetch("https://stormy-cliffs-97970.herokuapp.com/projects")
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: sortBy(data, [
            function(project) {
              return parseInt(project.ProjectName.match(/\d+/));
            }
          ])
        });
      })
      .catch();
  };

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.projects.map(project => {
                  return (
                    <tr key={project._id}>
                      <td>{project.ProjectName}</td>
                      <td>
                        Active{" "}
                        {moment().diff(
                          moment(project.ProjectStartDate),
                          "days"
                        )}{" "}
                        days
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">
            View All Project Data
          </Link>
        </div>
      </div>
    );
  }
}
