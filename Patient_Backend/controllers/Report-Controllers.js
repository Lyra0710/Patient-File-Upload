const Report = require('../models/Report');
const { validationResult } = require('express-validator');
const createReport = async (req, res, next) => {
    console.log(req.body);

    const { name, age, gender } = req.body;

    const images = req.files.map((file) => file.path); // Get an array of file paths

    const report = new Report({
        name,
        age,
        images, // Store the array of file paths
        gender,
    });

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return next(new Error('Invalid inputs passed, please check your data.'));
        }

        // Set the maximum time for the save operation to 60 seconds
        const options = {
            maxTimeMS: 60000,
        };

        await report.save(options);
    } catch (err) {
        return next(err);
    }
    res.status(201).json(report);
};


const getReport = async (req, res, next) => {
    let reports;
    try {
        reports = await Report.find();
    } catch (err) {
        return next(err);
    }
    res.status(200).json({ reports });
};

const getReportbyID = async (req, res, next) => {
    const ID = req.params.id;
    let report;
    try {
        report = await Report.find({ _id: ID });
    } catch (err) {
        return next(err);
    }
    res.json({ report });
};

module.exports = {
    createReport, 
    getReport, 
    getReportbyID
};
