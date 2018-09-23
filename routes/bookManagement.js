const express = require('express');
//Requiring express router
const router = express.Router();
//requiring model for Book
const Book = require('../Models/BookManagement_model');


router.get('/getAllBook', (req, res) => {
    Book.getAllBook((err, resBook) => {
        if (err) {
            res.json({
                suceess: false
            })
        }
        else {
            res.json({
                success: true,
                msg: resBook
            })
        }
    })


})

//Post request function: 
router.post('/addBook', (req, res) => {
    //checking request body:
    if (!req.body.name || !req.body.bookId || !req.body.subject) {
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
                if (reqBook) {
                    res.json({
                        success: false,
                        msg: "bookId already exists."
                    })
                } else {

                    let bookInfo = {
                        name: req.body.name,
                        bookId: req.body.bookId,
                        subject: req.body.subject

                    }
                    //function to add user to the Bookbase:
                    Book.addBook(bookInfo, (err) => {
                        if (err)
                            res.json({
                                success: false,
                                msg: err
                            });
                        else
                            res.json({
                                success: true,
                                msg: "Book successfully added"
                            });
                    });
                }
            }
        });
    }
});

//Method to delete Book:
router.post('/remove', (req, res) => {
    //checking request body:
    if (!req.body.bookId) {
        res.json({
            success: false,
            msg: 'Insufficient Book info'
        });
    } else {
        let user = {
            bookId: req.body.bookId
        }
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
                        msg: "bookId doesn't exists."
                    });
                } else {
                    Book.removeBook(reqBook._id, (err) => {

                        if (err) {
                            res.json({
                                success: false,
                                msg: err
                            });
                        } else {

                            res.json({
                                success: true,
                                msg: "Book Deleted Successfully..!"
                            });

                        }
                    });
                }

            }

        });
    }

});

//Exporting the router as a Module
module.exports = router;