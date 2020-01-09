const studentIdArray = [];
const studentNameArray = [];
const studentHourArray = [];
$.get("/api/tutor_data").then(function(data) {
    $("#tutorName").text(data.first_name + data.last_name);
  });
$.get("/api/get_student_names").then(function(data) {
    var studentHTML
    for(i=0; i<data.length; i++){
        studentHTML += data[i].first_name + " " + data[i].last_name + "<br />"
        $("#studentNameLog").append('<input type="radio" name="student" value="' + data[i].first_name + " " + data[i].last_name + '"> ' + data[i].first_name + " " + data[i].last_name+ '<br />')
        studentNameArray.append(data[i].first_name + " " + data[i].last_name)
    }
    $("#studentsDiv").innerHTML(studentHTML)
  });
$.get("/api/get_student_hours").then(function(data) {
    var hoursHTML
    for(i=0; i<data.length; i++){
      hoursHTML += data[i].hours + "<br />";
      studentIdArray.append(data[i].id);
      studentHourArray.append(data[i].hours);
    }
    $("#studentsHoursDiv").innerHTML(hoursHTML)
  });
$.get("/api/get_my_tutor_logs").then(function(data) {
    var tableHTML = "<table><tr><th>Student</th><th>Date</th><th>Duration</th></tr>"
    for(i=0; i<data.length; i++){
        tableHTML += "<tr><td>" + data[i].student_name + "</td><td>" + data[i].date + "</td><td>" + data[i].duration + "</td></tr>"
    }
    tableHTML += "</table>"
    $("#tutorLogs").innerHTML(tableHTML)
  });
$("#tutorLogs").submit(function(){
    var tutor = $("#tutorName").text();
    var student = $("#studentNameLog").value();
    var date = $("#dateLog").text();
    var duration = $("#durationLog").text();
    var studentId=studentIdArray[studentNameArray.indexOf(student)];
    var studentHours=studentHourArray[studentNameArray.indexOf(student)];;
    var tutorId;
    var tutorHours;
    $.get("api/tutor_data").then(function(data) {
      tutorId = data.id;
      tutorHours = data.hours;
    });
    $.post("/api/new_log", {
    tutor_id: tutorId,
    tutor_name: tutor,
    student_id: studentId,
    student_name: student,
    date: date,
    duration: duration
  })
  $.update("/api/student_hours", {id: studentId, hours: studentHours-duration})
  $.update("/api/tutor_hours", {id: tutorId, hours: tutorHours+duration})
});