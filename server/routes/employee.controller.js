let Employee = require('../models/employee').Employee;
let EmployeeSalary = require('../models/employeeSalary').EmployeeSalary;

exports.getEmployee = (req, res) => {
    let query = Employee.find();
    query.exec(function(err, data) {
        if (err) {
            return res.send(404, err);
        }

        return res.send(200, { data: data });
    });


}
exports.getEmployeeSalary = (req, res) => {
    let query = EmployeeSalary.find();
    query.exec(function(err, data) {

        if (err) {
            return res.send(404, err);
        }

        return res.send(200, { data: data });
    });
}