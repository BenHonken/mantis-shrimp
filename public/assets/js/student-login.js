$(document).ready(function() {
    // Getting references to our form and input
    var submitButton = $("#submit-login");
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");

    // When the form is submitted, we validate there's an email and password entered
    submitButton.on("click", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginStudent(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginStudent(email, password) {
        if (emailInput === Student.user_id) {
            $.post("/api/students", {
                    email: email,
                    password: password
                })
                .then(function() {
                    window.location.replace("../views/student.html");
                    // If there's an error, log the error
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    }
});