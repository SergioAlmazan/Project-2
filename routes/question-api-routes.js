var db = require("../models");

module.exports = function(app) {

  // route for posting new scores to the db
  app.post("/api/createQuestion", function(req, res) {
    db.Question.create({
      question: req.body.question,
      choiceA: req.body.choiceA,
      choiceB: req.body.choiceB,
      choiceC: req.body.choiceC,
      choiceD: req.body.choiceD,
      answer: req.body.answer,
      QuizId: req.body.quizId
    }).then;
    res.end();
  });
};