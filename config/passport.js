var passport = require("passport");
var LocalStrategy = require("passport-local");
var db = require("../models");

//authentication strategy
passport.use(new LocalStrategy(
    function (username, password, done) {
        db.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: "Not a valid Username"
                });
            }

            if (!user.verifyPassword(password)) {
                return done(null, false, {
                    message: "Invalid Password"
                });
            }
            return done(null, user);
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