const mongoose = require('mongoose') ;
const USER = require('../models/userDetails.model') 

const getData = async(req,res) =>{
    try{
        const students = await USER.find() ;
        res.json(students) ;
    }catch(error){
        console.log("ERROR :: FETCHING STUDENTS" , error) ;
        res.status(500).json({message : "FAILED TO FETCH STUDENT"})
    }
}

module.exports = {
    getData
}