const express = require('express');
//Requiring express router
const router = express.Router();
//requiring model for Student
const Student = require('../models/StudentInfo_model');


router.get('/getAllStudent',(req,res)=>{
Student.getAllStudent((err,resStudent)=>{
    if(err){
        res.json({
            suceess:false
        })
    }
    else{
        res.json({
            success:true,
            msg:resStudent
        })
    }
})


})

//Post request function: 
router.post('/addStudent', (req, res) => {
    //checking request body:
    if (!req.body.name || !req.body.studentId || !req.body.password || !req.body.class) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        
        Student.getStudentBystudentId(req.body.studentId, (err, reqStudent) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (reqStudent) {
                    res.json({
                        success: false,
                        msg: "studentId already exists."
                    })
                } else {

                    let studentInfo = {
                        name: req.body.name,
                        studentInfonstudentId: req.body.studentId,
                        password: req.body.password,
                        class: req.body.class,

                    }
                    //function to add studentInfo to the database:
                    Student.addStudent(studentInfo, (err) => {
                        if (err)
                            res.json({
                                success: false,
                                msg: err
                            });
                        else
                            res.json({
                                success: true,
                                msg: "Student successfully added"
                            });
                    });
                }
            }
        });
    }
});



//Method to make the studentInfo login:
router.post('/login', (req, res) => {
    //checking request body:
    if (!req.body.studentId || !req.body.password) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let studentInfo = {
            studentId: req.body.studentId,
            password: req.body.password
        }
        Student.getStudentBystudentId(req.body.studentId, (err, reqStudent) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqStudent) {
                    res.json({
                        success: false,
                        msg: "studentId doesn't exists."
                    });
                } else {
                    if (studentInfo.password != reqStudent.password) {
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: {
                                studentId: reqStudent.studentId,
                                name: reqStudent.name,
                                id: reqStudent._id,
                                class:reqStudent.class
                            }
                        });
                    }
                }

            }

        });
    }

});


//Method to Update Password:
router.post('/updatePassword', (req, res) => {
    if (!req.body.studentId || !req.body.password || !req.body.newPassword) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let studentInfo = {
            studentId: req.body.studentId,
            password: req.body.password
        }
        Student.getStudentBystudentId(req.body.studentId, (err, reqStudent) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqStudent) {
                    res.json({
                        success: false,
                        msg: "studentId doesn't exists."
                    });
                } else {
                    if (studentInfo.password != reqStudent.password) {
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    } else {
                        reqStudent.password = req.body.newPassword;
                        Student.UpdatePassword(reqStudent, (err) => {
                            if (err) {
                                res.json({
                                    success: false,
                                    msg: err
                                });
                            } else {
                                res.json({
                                    success: true,
                                    msg: "Password Successfully Updated.!"
                                });
                            }

                        })

                    }
                }
            }

        });
    }
});


//Method to delete studentInfo:
router.post('/remove', (req, res) => {
    //checking request body:
    if (!req.body.studentId || !req.body.password) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let studentInfo = {
            studentId: req.body.studentId,
            password: req.body.password
        }
        Student.getStudentBystudentId(req.body.studentId, (err, reqStudent) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqStudent) {
                    res.json({
                        success: false,
                        msg: "studentId doesn't exists."
                    });
                } else {
                    if (studentInfo.password != reqStudent.password) {
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    } else {

                        Student.removeStudent(reqStudent._id, (err) => {

                            if (err) {
                                res.json({
                                    success: false,
                                    msg: err
                                });
                            } else {
                                res.json({
                                    success: true,
                                    msg: "studentInfo Deleted Successfully..!"
                                });
                            }




                        })


                    }
                }

            }

        });
    }

});

//Exporting the router as a Module
module.exports = router;