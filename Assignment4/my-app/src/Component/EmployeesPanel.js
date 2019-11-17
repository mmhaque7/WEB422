import React, { Component } from "react";
import { sortBy } from "lodash";
import { Link } from "react-router-dom";

export default class EmployeesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount = () => {
    fetch("https://stormy-cliffs-97970.herokuapp.com/employees")
      .then(res => res.json())
      .then(data => {
        this.setState({
          employees: sortBy(data, [
            function(emp) {
              return emp.Extension;
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
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.employees.map(employee => {
                  return (
                    <tr key={employee._id}>
                      <td>{employee.FirstName + " " + employee.LastName}</td>
                      <td>{employee.Position.PositionName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/employees" className="btn btn-primary form-control">
            View All Employee Data
          </Link>
        </div>
      </div>
    );
  }
}
