var db = require("../models");

module.exports = function(app) {

  // route for posting new scores to the db
  app.post("/api/questionCreate", function(req, res) {
    db.question.create({
      question: req.body.question,
      choiceA: req.body.choiceA,
      choiceB: req.body.choiceB,
      choiceC: req.body.choiceC,
      choiceD: req.body.choiceD,
      answer: req.body.answer
    });
  });
};