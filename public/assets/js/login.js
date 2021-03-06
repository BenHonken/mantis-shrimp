$(document).ready(function() {
    // Getting references to our form and input
    var emailInput = $("#email-login");
    var passwordInput = $("#password-login");
    var login = $("#login");

    // When the form is submitted, we validate there's an email and password entered
    login.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password) {
        console.log("loginuser")
        $.post("/api/login", {
                email: email,
                password: password
            })
            .then(function(response) {
                console.log(response);
                console.log("posted")
                if (response.role === "student") {
                    window.location.replace("/student");
                } else if (response.role === "tutor") {
                    window.location.replace("/tutor");
                } else if (response.role === "admin") {
                    window.location.replace("/admin");
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});