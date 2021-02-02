$(document).ready(function() {
  // Getting references to our form and inputs
  var createQuestionForm = $(".createQuestion");
  var questionName = $("#question-input");
  var choiceA = $("#choiceA-input");
  var choiceB = $("#choiceB-input");
  var choiceC = $("#choiceC-input");
  var choiceD = $("#choiceD-input");

  createQuestionForm.on("submit", function(event) {
    event.preventDefault();
    var quesitonData = {
      question: questionName.val().trim(),
      choiceA: choiceA.val().trim(),
      choiceB: choiceB.val().trim(),
      choiceC: choiceC.val().trim(),
      choiceD: choiceD.val().trim()
    };

    if(!questionData.questionName || !) {
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