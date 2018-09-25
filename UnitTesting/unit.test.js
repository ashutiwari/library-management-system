const request = require("request");



describe('For Auth', () => {

    it('login testing 1', () => {
        var payload = {
            "username": "as@gmail.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/login",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(true);
        })

    });

    it('resisteration testing 2', () => {
        var payload = {
            "username": "as@gmai.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/registerAuthorization",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });

    it('resisteration testing 3', () => {
        var payload = {
            "username": "as@gmail.com",
            "password": "123"
        }
        var options = {
            uri: "http://localhost:3000/auth/registerAuthorization",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });

    it('resisteration testing 4', () => {
        var payload = {
            "username": "",
            "password": ""
        }
        var options = {
            uri: "http://localhost:3000/auth/registerAuthorization",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });



});

describe('For Student', () => {

    it('registration', () => {
        var payload = {
            "studentId": "1",
            "name": "ashu",
            "class": "4"
        }
        var options = {
            uri: "http://localhost:3000/student/registerStudent",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(true);
        })

    });



});

describe('Authorization Registration testing ', () => {

    it('registration  1', () => {
        var payload = {
            "name": "ashu",
            "username": "as@gmail.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/registerAuthorization",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });


    it('registration  2', () => {
        var payload = {
            "name": "ashu",
            "username": "ash@gmail.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/registerAuthorization",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(true);
        })

    });

    it('registration testing 3', () => {
        var payload = {
            "name": "",
            "username": "ash@gmail.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/registerAuthorization",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });


});

describe('Get All Authorization Testing ', () => {

    it('Authorization Testing 2', () => {
        var options = {
            uri: "http://localhost:3000/auth/getAllAuthorization",
            headers: {
                'Content-Type': "application/json"

            }
        };
        request.get(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(true);
        })

    });


});



describe('Authorization Remove testing ', () => {

    it('remove testing  1', () => {
        var payload = {
            "username": "ash@gmail.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/remove",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });


    it('remove testing  2', () => {
        var payload = {
            "username": "ash@gma.com",
            "password": "1234"
        }
        var options = {
            uri: "http://localhost:3000/auth/remove",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });

    it('remove testing 3', () => {
        var payload = {
            "username": "as@gmail.com",
            "password": "123"
        }
        var options = {
            uri: "http://localhost:3000/auth/remove",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });


    it('remove testing 4', () => {
        var payload = {
            "username": "",
            "password": ""
        }
        var options = {
            uri: "http://localhost:3000/auth/remove",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });

});

describe('Authorization Update testing ', () => {
    it('remove testing  1', () => {
        var payload = {
            "username": "ash@gmail.com",
            "password": "1234",
            "newPassword":"12345"
        }
        var options = {
            uri: "http://localhost:3000/auth/updatePassword",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(true);
        })

    });


    it('remove testing  2', () => {
        var payload = {
            "username": "a@gmail.com",
            "password": "1234",
            "newPassword":""
        }
        var options = {
            uri: "http://localhost:3000/auth/updatePassword",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });

    it('remove testing 3', () => {
        var payload = {
            "username": "a@gmail.co",
            "password": "1234",
            "newPassword":"12345"
        }
        var options = {
            uri: "http://localhost:3000/auth/updatePassword",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });


    it('remove testing 4', () => {
        var payload = {
            "username": "a@gmail.com",
            "password": "123",
            "newPassword":"12345"
        }
        var options = {
            uri: "http://localhost:3000/auth/updatePassword",
            headers: {
                'Content-Type': "application/json"

            },
            body: JSON.stringify(payload)
        };

        request.post(options, (err, res, body) => {
            body = JSON.parse(body);
            expect(body.success).toBe(false);
        })

    });

});