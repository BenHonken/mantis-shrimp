var path = require("path");
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/isAuthenticated");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/index.html"));

    });
    app.get("/store", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/store.html"));
    });

    app.get("/profile", function(req, res) {
        console.log(req.user.role)
        if (db.Users.role === "student") {
            res.sendFile(path.join(__dirname, "../views/student.html"));
        } else if (db.Users.role === "tutor") {
            res.sendFile(path.join(__dirname, "../views/tutor.html"));
        } else if (db.Users.role === "admin") {
            res.sendFile(path.join(__dirname, "../views/admin.html"));
        } else {
            res.sendFile(path.join(__dirname, "../views/index.html"))
        }


    });

    app.get("/student", function(req, res) {
        console.log(req.user.role)
        if (req.user.role === "student") {
            console.log(req.user.role)

            res.sendFile(path.join(__dirname, "../views/student.html"));
        } else {
            res.sendFile(path.join(__dirname, "../views/index.html"))
        }
    });

    app.get("/admin", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/admin.html"));
    });

    app.get("/tutor", function(req, res) {
        console.log(req.user.role)

        if (req.user.role === "tutor") {
            res.sendFile(path.join(__dirname, "../views/tutor.html"));
        } else {
            res.sendFile(path.join(__dirname, "../views/index.html"))
        }
    });

    // app.get("/student", isAuthenticated, function(req, res) {
    //     res.sendFile(path.join(__dirname, "../views/index.html"));
    // });

};