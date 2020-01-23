const studentIdArray = [];
const studentNameArray = [];
const studentHourArray = [];
$.get("/api/user/");
$.get("/api/tutor_data").then(function(data) {
  console.log(data);
  console.log(data.first_name);
  console.log(data.last_name);
    $("#tutorsName").text(data.first_name + " " + data.last_name);
  });
$.get("/api/get_student_names/").then(function(data) {
    var studentHTML = "<h3><u>Your Students</u></h3>";
    var studentNameLogHTML = "";
    for(i=0; i<data.length; i++){
        studentHTML += data[i].first_name + " " + data[i].last_name + "<br />"
        studentNameLogHTML += '<div class="form-check"> <input class="form-check-input" name="student" type="radio" value="' + data[i].first_name + " " + data[i].last_name + '"> <label class="form-check-label" for="materialUnchecked">' + data[i].first_name + " " + data[i].last_name + '</label> </div> <br />'
        studentNameArray.push(data[i].first_name + " " + data[i].last_name)
    }
    $("#studentsDiv").html(studentHTML);
    $("#studentNameLog").html(studentNameLogHTML);
  });
$.get("/api/get_student_hours").then(function(data) {
    var hoursHTML = "<h3><u>Hours Balance</u></h3>";
    for(i=0; i<data.length; i++){
      hoursHTML += data[i].hours + " hours<br />";
      studentIdArray.push(data[i].id);
      studentHourArray.push(data[i].hours);
    }
    $("#studentsHoursDiv").html(hoursHTML)
  });
$.get("/api/get_my_tutor_logs").then(function(data) {
    var tableHTML = "<br /><h3><u>Logged Sessions</u></h3><table><tr><th>Student</th><th>Date</th><th>Duration</th></tr>"
    for(i=0; i<data.length; i++){
        tableHTML += "<tr><td>" + data[i].student_name + "</td><td>" + data[i].date.substring(0,10) + "</td><td>" + data[i].duration + "</td></tr>"
    }
    tableHTML += "</table>"
    $("#myLogs").html(tableHTML)
  });
$("#tutorLogs").submit(function(){
  event.preventDefault();
    var radioButton = $("input[name='student']:checked");
    var student = radioButton.val();
    console.log($("#studentNameLog").val());
    var date = $("#dateLog").val();
    var duration = parseInt($("#durationLog").val());
    var studentId=parseInt(studentIdArray[studentNameArray.indexOf(student)]);
    var studentHours=parseInt(studentHourArray[studentNameArray.indexOf(student)]);
    $.post("/api/new_log", {
      student_user_id: studentId,
      student_name: student,
      date: date,
      duration: duration}).then(
  $.ajax({
    method: "PUT",
    url: "/api/student_hours/",
    data: {id: studentId, hours: studentHours-duration}
  })).then(
  $.ajax({
    method: "PUT",
    url: "/api/tutor_hours/",
    data: {duration: duration}
  })).then(setTimeout(function(){window.location.reload();},300))
});