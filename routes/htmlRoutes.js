var db = require("../models");
var path = require("path");
module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/index.html"));
        // db.Example.findAll({}).then(function(dbExamples) {
        //   res.render("index", {
        //     msg: "Welcome!",
        //     examples: dbExamples
        //   });
        // });
    });
    app.get("/store", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/store.html"));
    });

    app.get("/student", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/student.html"));
    });

    app.get("/tutor", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/tutor.html"));
    });

    app.get("/admin", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/admin.html"));
    });
    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};