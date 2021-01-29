// TODO - create html routes to export to server.js

// currently these are using handlebars syntax, can be changed later if we decide to use a different templating tool

const path = require("path");

module.exports = function(app) {

    // sends the user to the landing page, where they will login or create an account
    app.get("/", function(req, res) {
        res.render("index", data);
    });

    // sends user to the user homepage
    app.get("/user", function(req, res) {
        res.render("user", data);
    });

    // directs to page where a new quiz can be created
    app.get("/createQuiz", function(req, res) {
        res.render("creatQuiz", data);
    });

    // directs to page where a quiz can be taken
    app.get("/takeQuiz", function(req, res) {
        res.render("takeQuiz", data);
    });
};