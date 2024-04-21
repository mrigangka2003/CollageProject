const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const USER = require('../models/userDetails.model');

const saveStudent = async (req, res) => {
    try {
        const { name, studentId, email, department } = req.body;

        const newStudent = new USER({
            name,
            studentId,
            email,
            department
        });

        const save = await newStudent.save();
        if (!save) {
            console.log("DATA IS NOT SAVED :: INPUT.CONTROLLER.JS ::19");
        }
        res.status(201).json({ message: "Student data saved successfully" });
    } catch (error) {
        console.log("ERROR AT INPUT.CONTROLLER: ", error);
        res.status(500).json({ message: "Failed to save student" });
    }
}

module.exports = {
    saveStudent
};