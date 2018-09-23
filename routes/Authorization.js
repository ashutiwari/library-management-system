const express = require('express');
//Requiring express router
const router = express.Router();
//requiring model for Authorization
const Authorization = require('../Models/Authorization_model');


router.get('/getAllAuthorization',(req,res)=>{
Authorization.getAllAuthorization((err,resAuthorization)=>{
    if(err){
        res.json({
            suceess:false
        })
    }
    else{
        res.json({
            success:true,
            msg:resAuthorization
        })
    }
})


})

//Post request function:
router.post('/resisterAuthorization', (req, res) => {
    //checking request body:
    if (!req.body.name || !req.body.username || !req.body.password) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        Authorization.getAuthorizationByUsername(req.body.username, (err, reqAuthorization) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (reqAuthorization) {
                    res.json({
                        success: false,
                        msg: "username already exists."
                    })
                } else {

                    let authorizationInfo = {
                        name: req.body.name,
                        username: req.body.username,
                        password: req.body.password

                    }
                    //function to add AuthorizationInfo to the database:
                    Authorization.addAuthorization(authorizationInfo, (err) => {
                        if (err)
                            res.json({
                                success: false,
                                msg: err
                            });
                        else
                            res.json({
                                success: true,
                                msg: "Authorization successfully added"
                            });
                    });
                }
            }
        });
    }
});



//Method to make the AuthorizationInfo login:
router.post('/login', (req, res) => {
    //checking request body:
    if (!req.body.username || !req.body.password) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let authorizationInfo = {
            username: req.body.username,
            password: req.body.password
        }
        Authorization.getAuthorizationByUsername(req.body.username, (err, reqAuthorization) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqAuthorization) {
                    res.json({
                        success: false,
                        msg: "username doesn't exists."
                    });
                } else {
                    if (authorizationInfo.password != reqAuthorization.password) {
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: {
                                username: reqAuthorization.username,
                                name: reqAuthorization.name,
                                id: reqAuthorization._id
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
    if (!req.body.username || !req.body.password || !req.body.newPassword) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let authorizationInfo = {
            username: req.body.username,
            password: req.body.password
        }
        Authorization.getAuthorizationByUsername(req.body.username, (err, reqAuthorization) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqAuthorization) {
                    res.json({
                        success: false,
                        msg: "username doesn't exists."
                    });
                } else {
                    if (authorizationInfo.password != reqAuthorization.password) {
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    } else {
                        reqAuthorization.password = req.body.newPassword;
                        Authorization.UpdatePassword(reqAuthorization, (err) => {
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


//Method to delete AuthorizationInfo:
router.post('/remove', (req, res) => {
    //checking request body:
    if (!req.body.username || !req.body.password) {
        res.json({
            success: false,
            msg: 'Insufficient Data'
        });
    } else {
        let authorizationInfo = {
            username: req.body.username,
            password: req.body.password
        }
        Authorization.getAuthorizationByUsername(req.body.username, (err, reqAuthorization) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else {
                if (!reqAuthorization) {
                    res.json({
                        success: false,
                        msg: "username doesn't exists."
                    });
                } else {
                    if (authorizationInfo.password != reqAuthorization.password) {
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    } else {

                        Authorization.removeAuthorization(reqAuthorization._id, (err) => {

                            if (err) {
                                res.json({
                                    success: false,
                                    msg: err
                                });
                            } else {
                                res.json({
                                    success: true,
                                    msg: "AuthorizationInfo Deleted Successfully..!"
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