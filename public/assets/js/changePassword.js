$(document).ready(function() {
    // Getting references to our form and input
    var email = $("#email");
    var oldPassword = $("#oldPassword");
    var newPassword = $("#newPassword");
    var change = $("#change");

    // When the form is submitted, we validate there's an email and password entered
    change.on("submit", function(event) {
        event.preventDefault();
        var password = newPassword.val().trim()
        var user = {
            password: oldPassword.val().trim(),
            email: email.val().trim()
        };

        if (!user.password || !user.email || !password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        changePassword(user, password);
        oldPassword.val("");
        newPassword.val("");
    });

    function changePassword(user, password) {
        $.get("/logout").then($.post("/api/login", user)).then(
            $.ajax({
                url: "/api/change_password/",
                type: 'PUT',
                data: (password)
            })
        )
    }
});