/********************************************************************************* 
 * WEB422 – Assignment 03 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source 
 * (including web sites) or distributed to other students. *
 * 
 * 
 * 
 * 
 * *         Name: Md Mehedi Haque_____ Student ID: _154908172____________ Date: ______2019-10-10________
 * ********************************************************************************/

const teamsApiUrl = " https://stormy-cliffs-97970.herokuapp.com";

let viewModel = {
    teams: ko.observableArray([]),
    employees: ko.observableArray([]),
    projects: ko.observableArray([])
};
//Function showGenericModal(title,message)
function showGenericModal(title, message) {
    console.log("modal is maybe working i don't know yet")
    $(".modal-title").html(title);
    $(".modal-body").html(message);
    $("#genericModal").modal({});
};


//Function: initializeTeams()
function initializeTeams() {
    return new Promise((resolve, reject) => {
        $.get("https://stormy-cliffs-97970.herokuapp.com/teams-raw")
            .done((data) => {
                viewModel.teams = ko.mapping.fromJS(_.sortBy(data, [function (team) {
                    return parseInt(team.TeamName.match(/\d+/)); ///this sorts the teamNAme to 1-15
                }]))

                resolve();
            })
            .fail((err) => {
                reject("Error loading the team data.");
            })
    })
};


//Function: initializeEmployees()
function initializeEmployees() {
    return new Promise((resolve, reject) => {
        $.get("https://stormy-cliffs-97970.herokuapp.com/employees")
            .done((data) => {
                viewModel.employees = ko.mapping.fromJS(data);



                resolve();
            })
            .fail((err => {
                reject("Error loading the employee data.");
            }))
    })
};


//Function: initializeProjects()
function initializeProjects() {
    return new Promise((resolve, reject) => {
        $.get("https://stormy-cliffs-97970.herokuapp.com/projects")
            .done((data) => {
                viewModel.projects = ko.mapping.fromJS(data);
                resolve();
            })
            .fail((err) => {
                reject("Error loading the 'project' data.");
            })
    })
}
//Function Save teams
function saveTeam() {
    let currentTeam = this;
    $.ajax({
            url: "https://stormy-cliffs-97970.herokuapp.com/teams" + currentTeam._id(),
            type: "PUT",
            data: JSON.stringify({
                Projects: currentTeam.Projects(),
                Employees: currentTeam.Employees(),
                TeamLead: currentTeam.TeamLead()
            }),
            contentType: "application/json"

        })
        .done(function (data) {
            showGenericModal("Success", currentTeam.TeamName() + " Updated Successfully.");
        })
        .fail(function (err) {
            showGenericModal("Error", "Error updating the team information.")
        })
}

////////
$(document).ready(function () {
    console.log("I hope jQuery is Working");
    initializeTeams()
        .then(initializeEmployees)
        .then(initializeProjects)
        .then(function () {
            ko.applyBindings(viewModel);
            $("select.multiple").multipleSelect({
                filter: true
            });
            $("select.single").multipleSelect({
                single: true,
                filter: true
            });
        })
        .catch(function (err) {
            showGenericModal("Error", err);
        })
})