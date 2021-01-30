$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $(".login");
    var usernameInput = $("input#username-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      console.log("hi")
      usernameInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
      $.post("/api/users/:username", {
        username: req.params.username,
        password: password
      })
        .then(function() {
          window.location.replace("/user");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });