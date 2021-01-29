// decided it would be easier to have seperate routes for quiz information

var db = require("../models");

module.exports = function(app) {

    // get all quizes
    app.get("/api/quizes", function(req, res) {
        db.quiz.findAll({
            include: [db.score, db.quesiton]
        });
    });

    // gets all quizes with the given subject
    app.get("/api/quizes/:subject", function(req, res) {
        db.quiz.findAll({
            where: {
                subject: req.params.subject
            },
            include: [db.score, db.question]
        }).then(function(dbQuiz) {
            res.json(dbQuiz);
        });
    });
    
    // get quiz information by quiz name
    // used for displaying data to quiz home page
    app.get("/api/quizes/:name", function(req, res) {
        db.quiz.findAll({
            where: {
                name: req.params.name
            },
            include: [db.score, db.question]
        }).then(function(dbQuiz) {
            res.json(dbQuiz)
        });
    });
};