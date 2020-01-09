$(document).ready(function() {
    var firstName = $("#signupFirstName");
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/profile").then(function(data) {
        $("#studentName").text(data.first_name);
        $("#tutorName").text(data.first_name);
    });
});