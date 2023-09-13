const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    images: [{ type: String, required: true }], // Use an array to store multiple file paths
});

module.exports = mongoose.model('Report', ReportSchema);
