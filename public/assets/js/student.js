$.get("/api/user/").then(function(data) {
    var studentName = $("#studentName");
    studentName.text(data.first_name + " " + data.last_name);
    if (data.tutor_id) {
        $.get("api/get_user_by_id/", data.tutor_id).then(function(results) {
            $("#tutorName").text(results.first_name + " " + results.last_name)
        })
    }
});

$.get("/api/user_hours").then(function(data) {
    var hoursBalance = $("#hoursBalance");
    console.log(data);
    hoursBalance.text(data);
});