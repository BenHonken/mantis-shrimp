var passport = require("passport");
var LocalStrategy = require("passport-local");
var db = require("../models");

//authentication strategy
passport.use(new LocalStrategy(
    function (email, password, done) {
        db.User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!User) {
                return done(null, false, {
                    message: "Not a valid email"
                });
            }

            if (!User.verifyPassword(password)) {
                return done(null, false, {
                    message: "Invalid Password"
                });
            }
            return done(null, User);
        });
    }
));

//authentication request
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = passport;