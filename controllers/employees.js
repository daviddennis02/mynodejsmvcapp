const employeesModel = require('../model/employees');

exports.list = async (req, res) => {
    const data = await employeesModel.list();

    const context = {
        title: "Employees",
        data: data,
    };
    res.render("employees/list", context);
};

exports.view = async (req, res) => {
    const data = await employeesModel.view(req.params.id);
    const context = {
        title: "Employees",
        data: data,
    };
    res.render("employees/view", context);
};