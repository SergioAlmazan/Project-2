$(document).ready(function() {
  // Getting references to our form and inputs
  var createQuizForm = $(".createQuiz");
  var quizName = $("#quizName-input");
  var subject = $("#subject-input");

  createQuizForm.on("click", function(event) {
    event.preventDefault();

    var quizData = {
      name: quizName.val().trim(),
      subject: subject.val().trim()
    };

    if(!quizData.name) {
      return;
    }

    function createQuiz(quizName, subject) {
      $.post("/api/createQuiz", {
        name: quizName,
        subject: subject
      })
        .then(function() {
          // take user to where ever they make questions
          window.location.replace("/createQuestion");
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    createQuiz(quizData.name, quizData.subject);
  });
});