import React, { Component } from "react";
import Overview from "./Component/Overview";
import Projects from "./Component/Projects";
import Teams from "./Component/Teams";

import { Route, Switch } from "react-router-dom";
import Employees from "./Component/Employees";
import NotFound from "./Component/NotFound";

/*********************************************************************************
 *  WEB422 – Assignment 04
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *  assignment has been copied manually or electronically from any other source (including web sites) or
 *  distributed to other students.
 *
 *  Name: __Md Mehedi ____ Student ID: ______154908172________ Date: ____Oct 30 2019____________
 *
 ********************************************************************************/
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Overview />} />
        <Route exact path="/Projects" render={() => <Projects />} />
        <Route exact path="/Teams" render={() => <Teams />} />
        <Route exact path="/Employees" render={() => <Employees />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}
export default App;
