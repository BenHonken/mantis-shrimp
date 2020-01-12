var db = require("../models");
var passport = require("../config/passport");
module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user)
    });

    app.post("/api/signup", function(req, res) {
        db.Users.create(req.body)
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });



    // GET ROUTES
    app.get("/api/user/", function(req, res) {

        res.json(req.user);
    });
    app.get("/api/students", function(req, res) {
        db.Students.findAll({
            where: {
                user_id: req.user.id
            }
        }).then(function(dbStudents) {
            res.json(dbStudents);
        });
    });
    app.get("/api/tutors", function(req, res) {
        db.Tutors.findAll({
            where: {
                tutor_id: req.user.id
            }
        }).then(function(dbTutors) {
            res.json(dbTutors);
        });
    });
    app.get("/api/user_hours", function(req, res) {
        db.Users.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(dbStudents) {
            res.json(dbStudents.hours);
        });
    });

    app.get("/api/admin", function(req, res) {
        db.Admin.findAll({
            where: {
                user_id: req.user.id
            }
        }).then(function(dbAdmin) {
            res.json(dbAdmin);
        });
    });
    app.get("/api/tutor_data/", function(req, res) {
        db.Users.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(dbTutor) {
            res.json(dbTutor);
        });
    });
    app.get("/api/get_student_names/", function(req, res) {
        db.Users.findAll({
            where: {
                tutor_id: req.user.id
            }
        }).then(function(dbUsers) {
            res.json(dbUsers)
        });
    });
    app.get("/api/get_student_hours/", function(req, res) {
        db.Students.findAll({
            where: {
                tutor_id: req.user.id
            }
        }).then(function(dbStudents) {
            res.json(dbStudents);
        });
    });
    app.get("/api/get_my_tutor_logs/", function(req, res) {
        db.Logs.findAll({
            where: {
                tutor_user_id: req.user.id
            }
        }).then(function(dbLogs) {
            res.json(dbLogs);
        });
    });

    app.get("/api/profile", function(req, res) {
        console.log('req', req.query)
            //console.log('res', res)
        db.Users.findAll({
            where: {
                email: req.query.email,
                password: req.query.password
            }
        }).then(function(response) {
            console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', response)
            res.json(response);
        });
    });

    // POST ROUTES
    app.post("/api/profile", function(req, res) {
        db.Users.create(req.body).then(function(response) {
            console.log("after insert:");
            //console.log(response);
            res.json(response);
        });
    });
    app.post("/api/login", function(req, res) {
        db.Users.findOne({
            where: {
                email: req.user.email,
                password: req.user.password
            }
        }).then(function(response) {
            //console.log(response);
            if (response) {
                res.json(response.role);
            } else {
                res.json(false);
            }
        });
    });
    app.post("/api/store", function(req, res) {
        db.Products.create(req.body).then(function(dbProducts) {
            res.json(dbProducts);
        });
    });
    app.post("/api/new_log", function(req, res) {
        console.log(req.user)
        db.Log.create(req.body).then(function(dbLogs) {
            res.json(dbLogs);
        });
    });
    // DELETE ROUTES
    app.delete("/api/examples/:id", function(req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
            res.json(dbExample);
        });
    });
    // UPDATE ROUTES
    app.put("/api/student_hours/", function(req, res) {
        console.log("student hours route hit");
        let updateStudent = {
            hours: req.body.hours
        }
        console.log(updateStudent);
        db.Users.update(updateStudent, { where: { id: req.body.id } })
            .then(function(response) {
                return res.json(response);
            });
    })
    app.put("/api/tutor_hours/", function(req, res) {
        let updateTutor = {
            id: req.user.id,
            hours: req.body.hours
        }
        db.Tutors.update(updateTutor, { where: { id: req.user.id } }).then(function(result) {
            return res.json(result);
        });
    })
};