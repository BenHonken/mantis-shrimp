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

    function loginUser(email, password, role) {
        console.log("loginuser")
        $.get("/api/profile", {
                email: email,
                password: password,
                role: role
            })
            .then(function(response) {
                console.log("here")
                console.log(role)
                console.log(response)
                if (response[0].role === "student") {
                    window.location.replace("/student");
                } else if (response[0].role === "tutor") {
                    window.location.replace("/tutor");
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});