const express = require('express');
//Requiring express router
const router = express.Router();
//requiring model for Student
const Student = require('../Models/StudentInfo_model');
const Book = require('../Models/BookManagement_model');
const BookBorrow = require('../Models/BookBorrow_model');



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
                } else {
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


                                let bookBorrowInfo = {
                                    studentId: req.body.studentId,
                                    bookId: req.body.bookId
                                }
                                BookBorrow.getBorrowedBookByStudentIdAndBookId(bookBorrowInfo, (err, reqBorrowedBook) => {
                                    if (err)
                                        res.json({
                                            success: false,
                                            msg: err
                                        })
                                    else {
                                        if (reqBorrowedBook) {
                                            res.json({
                                                success: false,
                                                msg: "this student have already this book"
                                            })
                                        } else {
                                            let bookInfo = {
                                                studentName: reqStudent.name,
                                                studentId: reqStudent.studentId,
                                                bookId: req.body.bookId,
                                                bookName: reqBook.name,
                                                subject: reqBook.subject

                                            }
                                            //function to add user to the Bookbase:
                                            BookBorrow.addBorrowedBook(bookInfo, (err) => {
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
            }
        });
    }
});


router.post('/return', (req, res) => {
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
                } else {
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
                                //function to add user to the Bookbase:
                                let bookBorrowInfo = {
                                    studentId: req.body.studentId,
                                    bookId: req.body.bookId
                                }
                                BookBorrow.getBorrowedBookByStudentIdAndBookId(bookBorrowInfo, (err, reqBorrowedBook) => {
                                    if (err)
                                        res.json({
                                            success: false,
                                            msg: err
                                        })
                                    else {
                                        if (!reqBorrowedBook) {
                                            res.json({
                                                success: false,
                                                msg: "this student not borrowed any book currently."
                                            })
                                        } else {
                                            BookBorrow.removeBorrowedBook(reqBorrowedBook._id, (err) => {
                                                console.log(reqBorrowedBook._id)
                                                if (err)
                                                    res.json({
                                                        success: false,
                                                        msg: err
                                                    });
                                                else
                                                    res.json({
                                                        success: true,
                                                        msg: reqBorrowedBook
                                                    });
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    })


                }
            }
        });
    }
});


router.post('/searchByStudentId', (req, res) => {
    //checking request body:
    if (!req.body.studentId) {
        res.json({
            success: false,
            msg: 'Insufficient Book'
        });
    } else {
        BookBorrow.getBorrowedBookByStudentId(req.body.studentId, (err, reqBorrowedBook) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqBorrowedBook) {
                    res.json({
                        success: false,
                        msg: "this student  not borrowed any book currently."
                    })
                } else {
                    res.json({
                        success: true,
                        msg: reqBorrowedBook
                    });

                }
            }
        });
    }
});

router.post('/searchByBookId', (req, res) => {
    //checking request body:
    if (!req.body.bookId) {
        res.json({
            success: false,
            msg: 'Insufficient Book'
        });
    } else {
        BookBorrow.getBorrowedBookByBookId(req.body.bookId, (err, reqBorrowedBook) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqBorrowedBook) {
                    res.json({
                        success: false,
                        msg: "this book  not borrowed any student currently."
                    })
                } else {
                    res.json({
                        success: true,
                        msg: reqBorrowedBook
                    });

                }
            }
        });
    }
});







router.get('/borrowList', (req, res) => {
    BookBorrow.getAllBorrowedBook((err, reqBorrowedBook) => {
        if (err) {
            res.json({
                suceess: false
            })
        } else {
            res.json({
                success: true,
                msg: reqBorrowedBook
            })
        }
    });
});

module.exports = router;