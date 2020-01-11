// User list will have user id, full name, role, hours, and assigned tutor's full name
// Each user entry will have an "edit" button that will bring up a modal
// The modal will have an option to edit first name, last name, role, hours, and assigned tutor(from a dropdown of all tutors' full names)
// Changing a role will delete that user from the tutor or student table and create a new entry in the appropriate table
$.get("/api/user/");
$.get("/api/list_users").then(function(data) {
    //call that will get user data along with data from role table and then populate the user list via jquery.
    //it will also create buttons to mess with this list.  This one will probably be the worst.  
  });
$.get("/api/get_logs").then(function(data) {
    //add extra fields so you can see which tutor and date created
    var tableHTML = "<table><tr><th>Student</th><th>Date</th><th>Duration</th></tr>"
    for(i=0; i<data.length; i++){
        tableHTML += "<tr><td>" + data[i].student_name + "</td><td>" + data[i].date + "</td><td>" + data[i].duration + "</td></tr>"
    }
    tableHTML += "</table>"
    $("#tutorLogs").innerHTML(tableHTML)
  });
//add some on clicks for editing users roles and hours
// $("#tutorLogs").submit(function(){
//     var tutor = $("#tutorName").text();
//     var student = $("#studentNameLog").value();
//     var date = $("#dateLog").text();
//     var duration = $("#durationLog").text();
//     var studentId=studentIdArray[studentNameArray.indexOf(student)];
//     var studentHours=studentHourArray[studentNameArray.indexOf(student)];;
//     var tutorId;
//     var tutorHours;
//     $.get("api/tutor_data").then(function(data) {
//       tutorId = data.id;
//       tutorHours = data.hours;
//     });
//     $.post("/api/new_log", {
//     tutor_id: tutorId,
//     tutor_name: tutor,
//     student_id: studentId,
//     student_name: student,
//     date: date,
//     duration: duration
//   })
//   $.update("/api/student_hours", {id: studentId, hours: studentHours-duration})
//   $.update("/api/tutor_hours", {id: tutorId, hours: tutorHours+duration})
// });