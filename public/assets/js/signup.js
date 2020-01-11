$(document).ready(function() {

    var firstName = $("#signupFirstName");
    var lastName = $("#signupLastName");
    var emailInput = $("#signupEmail");
    var passwordInput = $("#signupPassword");

    var signup = $("#signup");


    signup.on("submit", function(event) {
        var radioButton = $("input[name='usertype']:checked");
        event.preventDefault();
        console.log("submit")
        var signUpData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            role: radioButton.val()
        };

        if (!signUpData.email || !signUpData.password || !signUpData.first_name || !signUpData.last_name) {
            return;
        }

        signUpUser(signUpData.email, signUpData.password, signUpData.first_name, signUpData.last_name, signUpData.role);
        emailInput.val("");
        passwordInput.val("");
        firstName.val();
        lastName.val();
        radioButton.val();
    });

    function signUpUser(email, password, first_name, last_name, role) {
        console.log("signUpUser");
        $.post("/api/signup", {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                role: role
            })
            .then(function(response) {
                console.log(response);
                console.log("posted")
                if (role === "student") {
                    window.location.replace("/student");
                } else if (role === "tutor") {
                    window.location.replace("/tutor");
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});