// TODO - create html routes to export to server.js
//      - can remove data variables later

// currently these are using handlebars syntax, can be changed later if we decide to use a different templating tool

const path = require("path");
var passport = require("../config/passport");

module.exports = function(app) {

    // sends the user to the landing page
    app.get("/", function(req, res) {
        res.render("index");
    });

    // sends user to the login or create an account page
    app.get("/login", function(req, res) {
        res.render("login");
    });

    // sends user to the user homepage
    app.get("/user", function(req, res) {
        res.render("user");
    });

    // sends user to landing page after logging them out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // view quiz details and other users score, optional
    app.get("/quiz", function (req, res) {
        res.render("quiz")
    });

    // directs to page where a new quiz can be created
    app.get("/createQuiz", function(req, res) {
        res.render("createQuiz");
    });

    // directs to page where a quiz can be taken
    app.get("/takeQuiz", function(req, res) {
        res.render("takeQuiz");
    });

    app.get("/createQuestion", function(req, res) {
        res.render("createQuestion")
    })
};