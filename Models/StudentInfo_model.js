const mongoose = require ('mongoose');

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    StudentId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    }
});

//To name and export defined schema:
const Student = module.exports = mongoose.model('studentInfo',studentSchema); // mongoose.model have 2 args: 1. collection name 2. schema name to be followed.



//Method to get all Student:

module.exports.getAllStudent = function(callback){
    Student.find(callback);
}

//Method to add Student:
module.exports.addStudent=function(studentInfo,callback){
    Student.create(studentInfo,callback);
}

module.exports.removeStudent = function(Id,callback){
Student.findByIdAndRemove(Id,callback)
}


//method to find details in Database using Username
module.exports.getStudentByStudentId= function(studentId,callback){
    let querry = {
        studentId:studentId
    }  
Student.findOne(querry,callback)
}

module.exports.UpdatePassword = function(studentInfo,callback){
    let update = {
        password: studentInfo.password
    }
    Student.findByIdAndUpdate(studentInfo._id,update,callback)
}