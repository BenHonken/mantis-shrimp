$.get("/api/user/").then(function(data) {
    var studentName = $("#studentName");
    studentName.text(data.first_name + " " + data.last_name);
});

$.get("/api/user_hours").then(function(data) {
    var hoursBalance = $("#hoursBalance");
    console.log(data);
    hoursBalance.text(data);
});