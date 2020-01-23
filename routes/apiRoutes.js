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
        req.user = null
        res.redirect('/'); 
    });

      // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
      user_id: req.body.user_id
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });



    // GET ROUTES
    app.get("/api/user/", function(req, res) {
        db.Users.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });
    app.get("/api/get_user_by_id/:id", function(req, res) {
        db.Users.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUsers) {
            res.json(dbUsers);
        });
    })
    app.get("/api/students", function(req, res) {
        db.Users.findAll({
            where: {
                tutor_id: req.user.id
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
                tutor_id: parseInt(req.user.id)
            }
        }).then(function(dbUsers) {
            res.json(dbUsers)
        });
    });
    app.get("/api/get_student_hours/", function(req, res) {
        db.Users.findAll({
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
    app.get("/api/get_logs/", function(req, res) {
        db.Logs.findAll().then(function(dbLogs) {
            res.json(dbLogs);
        });
    });
    app.get("/api/list_users", function(req, res) {
        db.Users.findAll().then(function(dbUsers) {
            res.json(dbUsers)
        })
    })

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

      // GET route for getting all of the todos
  app.get("/api/todos/:id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({
        where: {
            user_id: req.params.id
        }
    }).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
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
        var log = req.body;
        log.tutor_user_id = req.user.id;
        log.tutor_name = req.user.first_name + " " + req.user.last_name;
        db.Logs.create(log).then(function(dbLogs) {
            res.json(dbLogs);
        });
    });
    // DELETE ROUTES
    app.delete("/api/delete_user_by_id/:id", function(req, res) {
        db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });

      // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });
    // UPDATE ROUTES
    app.put("/api/student_hours/", function(req, res) {
        console.log("student hours route hit");
        let updateStudent = {
            hours: req.body.hours
        }
        db.Users.update(updateStudent, { where: { id: req.body.id } }).then(function(result) {
            return res.json(result);
        });
    })
    app.put("/api/tutor_hours/", function(req, res) {
        let updateTutor = {
            id: req.user.id,
            hours: req.user.hours + req.body.duration
        }
        db.Users.update(updateTutor, { where: { id: req.user.id } }).then(function(result) {
            return res.json(result);
        });
    })
    app.put("/api/update_user/", function(req, res) {
        let updateUser = {
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            role: req.body.role,
            hours: req.body.hours,
            tutor_id: req.body.tutor_id
        }
        db.Users.update(updateUser, { where: { id: req.body.id } }).then(function(result) {
            return res.json(result);
        });
    })

      // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};