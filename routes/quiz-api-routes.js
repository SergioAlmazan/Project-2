// decided it would be easier to have seperate routes for quiz information

var db = require("../models");

module.exports = function(app) {
    
    // get all quiz information by quiz name
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