import React, { Component } from "react";
import MainContainer from "./MainContainer";
import moment from "moment";
import { sortBy } from "lodash";

export default class Employees extends Component {
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
      <MainContainer highlight="Employees">
        <h1 className="page-header">Employees</h1>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Name & Position</th>
                  <th>Address</th>
                  <th>Phone Num</th>
                  <th>Hire Date</th>
                  <th>Salary Bonus</th>
                </tr>
                {this.state.employees.map(employee => {
                  return (
                    <tr key={employee._id}>
                      <td>
                        {employee.FirstName +
                          " " +
                          employee.LastName +
                          " - " +
                          employee.Position.PositionName}
                      </td>
                      <td>
                        {employee.AddressStreet +
                          ", " +
                          employee.AddressCity +
                          ", " +
                          employee.AddressState +
                          ", " +
                          employee.AddressZip}
                      </td>
                      <td>
                        {employee.PhoneNum + " ex: " + employee.Extension}
                      </td>
                      <td>
                        {moment(employee.HireDate)
                          .utc()
                          .format("LL")}
                      </td>
                      <td>$ {employee.SalaryBonus}</td>
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
