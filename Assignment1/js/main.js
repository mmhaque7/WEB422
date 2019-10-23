/*********************************************************************************
 * WEB422 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: ______Md Mehedi Haque________________ Student ID: ____154908172__________ Date: ______September 11 2019__________
 *
 *
 ********************************************************************************/
$(document).ready(function () {
    console.log("jQuery working");

    $("#teams-menu").on("click", function (event) {
        event.preventDefault();

        $.get("https://stormy-cliffs-97970.herokuapp.com/teams", (data) => {
            console.log(data);
            $('#data').empty()
                .append("<h3>Teams</h3>")
                .append(JSON.stringify(data));
        })

    });


    $("#employees-menu").on("click", function (event) {
        event.preventDefault();

        $.get("https://stormy-cliffs-97970.herokuapp.com/employees", (data) => {
            console.log(data);
            $('#data').empty()
                .append("<h3>Employees</h3>")
                .append(JSON.stringify(data));
        })


    });
    $("#projects-menu").on("click", function (event) {
        event.preventDefault();

        $.get("https://stormy-cliffs-97970.herokuapp.com/projects", (data) => {
            console.log(data);
            $('#data').empty()
                .append("<h3>Projects</h3>")
                .append(JSON.stringify(data));

        })
    });

    $("#positions-menu").on("click", function (event) {
        event.preventDefault();

        $.get("https://stormy-cliffs-97970.herokuapp.com/positions", (data) => {
            console.log(data);
            $('#data').empty()
                .append("<h3>Positions</h3>")
                .append(JSON.stringify(data));
        })
    })
})