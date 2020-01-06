var path = require("path");
module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../views/index.html"));

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
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};