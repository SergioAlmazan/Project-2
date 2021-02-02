/* eslint-disable no-trailing-spaces */
$(document).ready(function() {
  console.log("the page loaded");
  // Getting references to our form and inputs
  var createQuizForm = $(".createQuiz");
  var quizName = $("#quizName-input");
  var subject = $("#subject-input");

  createQuizForm.on("submit", function(event) {
    event.preventDefault();

    console.log("create quiz was clicked");
    
    var quizData = {
      name: quizName.val().trim(),
      subject: subject.val().trim()
    };

    if(!quizData.name) {
      return;
    }

    console.log(quizData);

    function createQuiz(quizName, subject) {
      console.log(quizName + subject);
      $.post("/api/createQuiz", {
        name: quizName,
        subject: subject
      })
        .then(function() {
          // take user to where ever they make questions
          console.log("call made");
          window.location.replace("/createQuestion");
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    createQuiz(quizData.name, quizData.subject);
  });
});