var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Schemas
var Employee = new Schema({
    _id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    created: { type: Date, default: Date.now }
});

// Export Models
exports.Employee = mongoose.model('Employee', Employee);