import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav-component/nav-component.component";
import { ContentComponent } from "./content-component/content-component.component";
import { FooterComponent } from "./footer-component/footer-component.component";
import { HomeComponent } from "./home-component/home-component.component";
import { EmployeesComponent } from "./employees-component/employees-component.component";
import { PositionComponent } from "./positions-component/positions-component";
import { PageNotFoundComponent } from "./page-not-found-component/page-not-found-component.component";
import { EmployeeService } from "./data/employee.service";
import { PositionService } from "./data/position.service";
import { RouterModule } from "@angular/router";
import { PositioComponent } from "./positio-component/positio-component.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    EmployeesComponent,
    PositionComponent,
    PageNotFoundComponent
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [EmployeeService, PositionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
