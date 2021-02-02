// TODO - create api routes to export to server.js

// gets all models(table) from the models folder
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  // get all user data
  // for validating login informaiton
  app.get("/api/users", function(req, res) {
    db.user.findAll({});
  });

  // get all user data by username
  // used for displaying data to user home page
  app.get("/api/users/:username", function(req, res) {
    db.user.findAll({
      where: {
        username: req.params.username
      },
      include: [db.quiz, db.score]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // took this from hw14
  // TODO - install and require passport and any other required files
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // // this is also from hw14
  // // TODO - hide password with bcryptjs
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then;
    res.end();
  });
};