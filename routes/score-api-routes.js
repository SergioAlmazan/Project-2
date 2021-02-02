var db = require("../models");

module.exports = function(app) {

  // route for posting new scores to the db
  app.post("/api/scoreCreate", function(req, res) {
    db.Score.create({
      score: req.body.score
    });
  });
};