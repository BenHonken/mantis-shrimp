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
        if (db.Users.role === "student") {
            res.redirect("/student");
        } else if (db.Users.role === "tutor") {
            res.redirect("/tutor");
        } else if (db.Users.role === "admin") {
            res.redirect("/admin");
        }
        else{
            res.redirect("/")
        }


    });

    app.get("/student", function(req, res) {
        try{
            if (req.user.role === "student") {
                res.sendFile(path.join(__dirname, "../views/student.html"));
            }
            else{
                res.redirect("/")
            }
        }
        catch{
            res.redirect("/")
        }
    });

    app.get("/admin", function(req, res) {
        try{
            if (req.user.role === "admin") {
                res.sendFile(path.join(__dirname, "../views/admin.html"));
            }
            else{
                res.redirect("/")
            }
        }
        catch{
            res.redirect("/")
        }
    });

    app.get("/tutor", function(req, res) {
        try{
            if (req.user.role === "tutor") {
                res.sendFile(path.join(__dirname, "../views/tutor.html"));
            }
            else{
                res.redirect("/")
            }
        }
        catch{
            res.redirect("/")
        }
    });

};