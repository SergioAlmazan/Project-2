$(document).ready(function() {
  // Getting references to our form and inputs
  var form = $(".createQuestion");
  var createAnother = $("#submitAndContinue");
  var finishQuiz = $("#submitAndFinish");
  var questionName = $("#question-input");
  var choiceA = $("#choiceA-input");
  var choiceB = $("#choiceB-input");
  var choiceC = $("#choiceC-input");
  var choiceD = $("#choiceD-input");
  var answer = $("#answer-input");
  var quizId;

  function findQuiz() {
    $.get("/api/quizes", function(data) {
      quizId = data.length;
      return quizId;
    });
  }

  findQuiz();

  createAnother.on("click", function(event) {
    event.preventDefault();

    var questionData = {
      question: questionName.val().trim(),
      choiceA: choiceA.val().trim(),
      choiceB: choiceB.val().trim(),
      choiceC: choiceC.val().trim(),
      choiceD: choiceD.val().trim(),
      answer: answer.val().trim()
    };

    if(!questionData.question || !questionData.choiceA || !questionData.answer) {
      return;
    }

    function createQuestion(questionName, choiceA, choiceB, choiceC, choiceD, answer, quizId) {
      $.post("/api/createQuestion", {
        question: questionName,
        choiceA: choiceA,
        choiceB: choiceB,
        choiceC: choiceC,
        choiceD: choiceD,
        answer: answer,
        quizId: quizId
      })
        .then(function() {
          // reset form, need index of zero to use jQuery
          form[0].reset();
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    createQuestion(questionData.question, questionData.choiceA, questionData.choiceB, questionData.choiceC, questionData.choiceD, questionData.answer, quizId);
  });

  finishQuiz.on("click", function(event) {
    event.preventDefault();
    var questionData = {
      question: questionName.val().trim(),
      choiceA: choiceA.val().trim(),
      choiceB: choiceB.val().trim(),
      choiceC: choiceC.val().trim(),
      choiceD: choiceD.val().trim(),
      answer: answer.val().trim()
    };

    if(!questionData.question || !questionData.choiceA || !questionData.answer) {
      return;
    }

    function createQuestionAndFinish(questionName, choiceA, choiceB, choiceC, choiceD, answer, quizId) {
      $.post("/api/createQuestion", {
        question: questionName,
        choiceA: choiceA,
        choiceB: choiceB,
        choiceC: choiceC,
        choiceD: choiceD,
        answer: answer,
        quizId: quizId
      })
        .then(function() {
          // take user back to the user page when they are done making a quiz
          window.location.replace("/user");
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    createQuestionAndFinish(questionData.question, questionData.choiceA, questionData.choiceB, questionData.choiceC, questionData.choiceD, questionData.answer, quizId);
  });
});