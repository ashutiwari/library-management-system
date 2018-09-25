const express = require('express');
//Requiring express router
const router = express.Router();
//requiring model for Student
const Student = require('../Models/StudentInfo_model');


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
router.post('/registerStudent', (req, res) => {
    //checking request body:
    if (!req.body.name || !req.body.studentId || !req.body.class) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        Student.getStudentByStudentId(req.body.studentId, (err, reqStudent) => {
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
                        studentId: req.body.studentId,
                        class: req.body.class

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


router.post('/remove', (req, res) => {
    //checking request body:
    if (!req.body.studentId) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let studentInfo = {
            studentId: req.body.studentId,
        }
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
                        msg: "studentId doesn't exists."
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

        });
    }

});

//Exporting the router as a Module
module.exports = router;