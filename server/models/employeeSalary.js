var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Schemas
var EmployeeSalary = new Schema({
    _id: { type: String },
    code: { type: String, ref: 'Employee' },
    salary: { type: Number, required: true },
    created: { type: Date, default: Date.now }
});

// Export Models
exports.EmployeeSalary = mongoose.model('EmployeeSalary', EmployeeSalary);