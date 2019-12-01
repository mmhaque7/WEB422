import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home-component/home-component.component";
import { EmployeesComponent } from "./employees-component/employees-component.component";
import { PositionComponent } from "./positions-component/positions-component";
import { PageNotFoundComponent } from "./page-not-found-component/page-not-found-component.component";
import { PositioComponent } from "./positio-component/positio-component.component";
import { EmployeeComponent } from "./employee-component/employee-component.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "positions", component: PositionComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
  { path: "positio/:_id", component: PositioComponent },
  { path: "employee/:_id", component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
