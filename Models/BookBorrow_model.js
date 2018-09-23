const mongoose = require ('mongoose');

const bookBorrowedSchema=mongoose.Schema({
    studentId:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    bookName:{
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
    },
    date:{
        type:Date,
        default:new Date()
    }
});

//To name and export defined schema:
const BookBorrowed = module.exports = mongoose.model('bookBorrowedInfo',bookBorrowedSchema); // mongoose.model have 2 args: 1. collection name 2. schema name to be followed.

//Method to get all Book:

module.exports.getAllBorrowedBook = function(callback){
    BookBorrowed.find(callback);
}

//Method to add Book:
module.exports.addBorrowedBook=function(bookInfo,callback){
    BookBorrowed.create(bookInfo,callback);
}

module.exports.removeBorrowedBook = function(Id,callback){
    BookBorrowed.findByIdAndRemove(Id,callback)
}

//method to find details in Database using ID:
module.exports.getBorrowedBookByStudentId= function(studentId,callback){
    let querry = {
        studentId:studentId
    }
    BookBorrowed.find(querry,callback)
}


//method to find details in Database using ID:
module.exports.getBorrowedBookByStudentIdAndBookId= function(bookBorrowedInfo,callback){
    let querry = {
        studentId:bookBorrowedInfo.studentId,
        bookId :bookBorrowedInfo.bookId
    }
    BookBorrowed.findOne(querry,callback)
}



module.exports.getBorrowedBookByBookId= function(bookId,callback){
    let querry = {
        bookId:bookId
    }
    BookBorrowed.find(querry,callback)
}