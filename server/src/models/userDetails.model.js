const mongoose = require('mongoose') ;

const userDetails = new mongoose.Schema({
    name : {
        type :String,
        required : true 
    },
    studentId : {
        type :String,
        required : true ,
        unique: true
    },
    email :{
        type :String,
        required : true ,
        unique : true 
    },
    department :{
        type :String ,
        required:true 
    }
}) ;

module.exports = mongoose.model('USER', userDetails) ;