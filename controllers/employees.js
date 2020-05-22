const employeesModel = require('../model/employees');

exports.list = (req, res) => {
    const context = {
        title: "Employees",
        data: employeesModel.list()
    };
    res.render("employees/list", context);
};

exports.view = (req, res) => {
    console.log(employeesModel.view(req.params.id));
    const context = {
        title: "Employees",
        data: employeesModel.view(req.params.id)
    };
    res.render("employees/view", context);
};