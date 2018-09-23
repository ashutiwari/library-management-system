const mongoose = require ('mongoose');

const AuthorizationSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

//To name and export defined schema:
const Authorization = module.exports = mongoose.model('AuthorizationInfo',AuthorizationSchema); // mongoose.model have 2 args: 1. collection name 2. schema name to be followed.



//Method to get all Authorization:

module.exports.getAllAuthorization = function(callback){
    Authorization.find(callback);
}

//Method to add Authorization:
module.exports.addAuthorization=function(authorizationInfo,callback){
    Authorization.create(authorizationInfo,callback);
}

module.exports.removeAuthorization = function(Id,callback){
Authorization.findByIdAndRemove(Id,callback)
}

//method to find details in Database using Username
module.exports.getAuthorizationByUsername= function(username,callback){
    let querry = {
        username:username
    }
Authorization.findOne(querry,callback)
}

module.exports.UpdatePassword = function(authorizationInfo,callback){
    let update = {
        password: authorizationInfo.password
    }
    Authorization.findByIdAndUpdate(authorizationInfo._id,update,callback)
}