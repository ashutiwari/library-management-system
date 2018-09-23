const mongoose = require ('mongoose');

const bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bookId:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
});

//To name and export defined schema:
const Book = module.exports = mongoose.model('bookInfo',bookSchema); // mongoose.model have 2 args: 1. collection name 2. schema name to be followed.

//Method to get all Book:

module.exports.getAllBook = function(callback){
    Book.find(callback);
}

//Method to add Book:
module.exports.addBook=function(bookInfo,callback){
    Book.create(bookInfo,callback);
}

module.exports.removeBook = function(Id,callback){
Book.findByIdAndRemove(Id,callback)
}

//method to find details in Database using ID:
module.exports.getBookByBookId= function(bookId,callback){
    let querry = {
        bookId:bookId
    }  
book.findOne(querry,callback)
}