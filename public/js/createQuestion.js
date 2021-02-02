$(document).ready(function() {
  // Getting references to our form and inputs
  var createAnother = $("#submitAndContinue");
  var finishQuiz = $("#submitAndFinish");
  var questionName = $("#question-input");
  var choiceA = $("#choiceA-input");
  var choiceB = $("#choiceB-input");
  var choiceC = $("#choiceC-input");
  var choiceD = $("#choiceD-input");
  var answer = $("#answer-input");

  createAnother.on("submit", function(event) {
    event.preventDefault();
    var questionData = {
      question: questionName.val().trim(),
      choiceA: choiceA.val().trim(),
      choiceB: choiceB.val().trim(),
      choiceC: choiceC.val().trim(),
      choiceD: choiceD.val().trim(),
      answer: answer.val().trim()
    };

    if(!questionData.questionName || !questionData.choiceA || !questionData.answer) {
      return;
    }

    function createQuestion(questionName, choiceA, choiceB, choiceC, choiceD, answer) {
        console.log("createQuestion triggerd")
      $.post("/api/createQuestion", {
        question: questionName,
        choiceA: choiceA,
        choiceB: choiceB,
        choiceC: choiceC,
        choiceD: choiceD,
        answer: answer
      })
        .then(function() {
          // take user to where ever they make questions
          window.location.replace("/createQuestion");
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    createQuestion(questionData.question, questionData.choiceA, questionData.choiceB, questionData.choiceC, questionData.choiceD, questionData.answer);
  });

  finishQuiz.on("submit", function(event) {
    event.preventDefault();
    var questionData = {
      question: questionName.val().trim(),
      choiceA: choiceA.val().trim(),
      choiceB: choiceB.val().trim(),
      choiceC: choiceC.val().trim(),
      choiceD: choiceD.val().trim(),
      answer: answer.val().trim()
    };

    if(!questionData.questionName || !questionData.choiceA || !questionData.answer) {
      return;
    }

    function createQuestionAndFinish(questionName, choiceA, choiceB, choiceC, choiceD, answer) {
        console.log("finish triggered");
        $.post("/api/createQuestion", {
        question: questionName,
        choiceA: choiceA,
        choiceB: choiceB,
        choiceC: choiceC,
        choiceD: choiceD,
        answer: answer
      })
        .then(function() {
          // take user to where ever they make questions
          window.location.replace("/user");
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    createQuestionAndFinish(questionData.question, questionData.choiceA, questionData.choiceB, questionData.choiceC, questionData.choiceD, questionData.answer);
  });
});