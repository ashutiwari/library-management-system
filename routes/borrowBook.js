const express = require('express');
//Requiring express router
const router = express.Router();
//requiring model for Student
const Student = require('../models/StudentInfo_model');
const Book = require('../BookManagement_model');



//Post request function: 
router.post('/borrow', (req, res) => {
    //checking request body:
    if (!req.body.studentId || !req.body.bookId) {
        res.json({
            success: false,
            msg: 'Insufficient Book'
        });
    } else {
        Book.getBookByBookId(req.body.bookId, (err, reqBook) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqBook) {
                    res.json({
                        success: false,
                        msg: "bookId not exists."
                    })
                }
                else {
                    Student.getStudentByStudentId(req.body.studentId, (err, reqStudent) => {
                        if (err)
                            res.json({
                                success: false,
                                msg: err
                            })
                        else {
                            if (!reqStudent) {
                                res.json({
                                    success: false,
                                    msg: "StudentId not exists."
                                });

                            } else {
                                let bookInfo = {
                                    studentName: reqStudent.name,
                                    studentId:reqStudent.id,
                                    bookId: req.body.bookId,
                                    bookName: req.body.password,
                                    sub: reqBook.subject,

                                }
                                //function to add user to the Bookbase:
                                BookBorrow.addBookBorrow(bookInfo, (err) => {
                                    if (err)
                                        res.json({
                                            success: false,
                                            msg: err
                                        });
                                    else
                                        res.json({
                                            success: true,
                                            msg: "Book borrowed successfully "
                                        });
                                });
                            }
                        }
                    });

                }
            }
        });
    }
});





