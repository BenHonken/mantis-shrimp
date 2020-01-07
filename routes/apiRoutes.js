var db = require("../models");
module.exports = function(app) {

    // GET ROUTES
    app.get("/api/students", function(req, res) {
        db.Students.findAll({
            where: {
                user_id: req.params.id
            }
        }).then(function(dbStudents) {
            res.json(dbStudents);
        });
    });
    app.get("/api/tutors", function(req, res) {
        db.Tutors.findAll({
            where: {
                tutor_id: req.params.id
            }
        }).then(function(dbTutors) {
            res.json(dbTutors);
        });
    });
    app.get("/api/admin", function(req, res) {
        db.Admin.findAll({
            where: {
                user_id: req.params.id
            }
        }).then(function(dbAdmin) {
            res.json(dbAdmin);
        });
    });

    // POST ROUTES
    app.post("/api/store", function(req, res) {
        db.Products.create(req.body).then(function(dbProducts) {
            res.json(dbProducts);
        });
    });

    // DELETE ROUTES
    app.delete("/api/examples/:id", function(req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
            res.json(dbExample);
        });
    });
};