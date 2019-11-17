let employeesModel = [];



//Function: initializeEmployeesModel()
function initializeEmployeesModel() {
    $.get("https://stormy-cliffs-97970.herokuapp.com/employees")
        .done(function (data) {
            employeesModel = data;
            refreshEmployeeRows(employeesModel);
        })
        .fail(function (err) {
            showGenericModal('Error, Unable to get EmployeesS');
        })
}

//Function: showGenericModal(title,message) 

function showGenericModal(title, message) {
    console.log("modal is maybe working i don't know yet")
    $(".modal-title").html(title);
    $(".modal-body").html(message);
    $("#genericModal").modal({});
}

//Function: refreshEmployeeRows(employees)
function refreshEmployeeRows(employees) {
    $("#employees-table").empty();
    let template = _.template('<% _.forEach(employees, function(employee){%>' +
        '<div class="row body-row" data-id="<%- employee._id %>">' +
        '<div class="col-xs-4 body-column"><%- _.escape(employee.FirstName) %></div>' +
        '<div class="col-xs-4 body-column"><%- _.escape(employee.LastName) %></div>' +
        '<div class="col-xs-4 body-column"><%- _.escape(employee.Position.PositionName) %></div>' +
        '</div>' +
        '<% }); %>');
    $("#employees-table").append(template({
        'employees': employees
    }));
};

//Function: getFilteredEmployeesModel(filterString)
function getFilteredEmployeesModel(filterString) {
    let filteredEmployeesModel = _.filter(employeesModel, function (e) {
        if (e.FirstName.toLowerCase().includes(filterString.toLowerCase()) ||
            e.LastName.toLowerCase().includes(filterString.toLowerCase()) ||
            e.Position.PositionName.toLowerCase().includes(filterString.toLowerCase())) return true;
        else return false;
    });
    return filteredEmployeesModel;
};
//Function: getEmployeeModelById(id) 

function getEmployeeModelById(id) {
    let retValue = null;
    for (let i = 0; i < employeesModel.length; i++) {
        if (employeesModel[i]._id = id) {
            retValue = _.cloneDeep(employeesModel[i]);
        }
    }
    return retValue;

}

//////////
$(document).ready(function () {

    console.log("jQuery Working");

    initializeEmployeesModel();

    $("#employee-search").on("keyup", function (event) {
        let filtered = getFilteredEmployeesModel(this.value);
        refreshEmployeeRows(filtered);
    });
    $(document.body).on('click', '.body-row', function () {
        let employee = getEmployeeModelById($(this).attr("data-id"));
        if (employee != null) {

            employee.HireDate = moment(employee.HireDate).format('LL');

            let modalContentTemplate = _.template(
                '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %>. <%- employee.AddressZip %></br>' +
                '<strong>Phone Number:</strong> <%- employee.PhoneNum %> ext: <%- employee.Extension %></br>' +
                '<strong>Hire Date:</strong> <%- employee.HireDate %>'
            );
            let modalContent = modalContentTemplate({
                'employee': employee
            });

            showGenericModal(employee.FirstName + ' ' + employee.LastName, modalContent);
        }
    });
});