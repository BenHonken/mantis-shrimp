// User list will have user id, full name, role, hours, and assigned tutor's full name
// Each user entry will have an "edit" button that will bring up a modal
// The modal will have an option to edit first name, last name, role, hours, and assigned tutor(from a dropdown of all tutors' full names)
// Changing a role will delete that user from the tutor or student table and create a new entry in the appropriate table
$.get("/api/user/").then(function(response){
  $("#adminName").text(response.first_name + " " + response.last_name)
});
$.get("/api/list_users").then(function(data) {
    var tableHTML = "<table><tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Role</th><th>Hours</th><th>Tutor ID</th><th>Update</th></tr>"
    for(i=0; i<data.length; i++){
        tableHTML += "<tr><td>" + data[i].id + "</td><td>" + data[i].first_name + "</td><td>" + data[i].last_name + "</td><td>" + data[i].email + "</td><td>" + data[i].role + "</td><td>" + data[i].hours + "</td><td>" + data[i].tutor_id + "</td><td><button class='btn btn-primary userEdit' data-target='#userEdit' data-id=" + data[i].id + " data-toggle='modal' type='button'>Edit</button><button class='btn btn-danger userDelete' data-id=" + data[i].id + " type='button'>Delete</button></td></tr>"
    }
    tableHTML += "</table>"
    $("#allUsers").html(tableHTML)
  });
$.get("/api/get_logs").then(function(data) {
    //add extra fields so you can see which tutor and date created
    var tableHTML = "<table><tr><th>Tutor</th><th>Student</th><th>Date of Session</th><th>Date Created</th><th>Duration</th></tr>"
    for(i=0; i<data.length; i++){
        tableHTML += "<tr><td>" + data[i].tutor_name + "</td><td>" + data[i].student_name + "</td><td>" + data[i].date + "</td><td>" + data[i].createdAt + "</td><td>" + data[i].duration + "</td></tr>"
    }
    tableHTML += "</table>"
    $("#allLogs").html(tableHTML)
  });
$(document).on("click",".userEdit", function(){
  var id = $(this).data( "id" );
  $.get("api/get_user_by_id/" + JSON.stringify(id)).then(function(response){
    $("#idLog").val(response.id);
    $("#adminFirstName").val(response.first_name);
    $("#adminLastName").val(response.last_name);
    $("#adminEmail").val(response.email);
    $("#adminRole").val(response.role);
    $("#adminHours").val(response.hours);
    $("#adminTutorID").val(response.tutor_id);
  })
});
$("#adminLogs").submit(function(){
  event.preventDefault();
  var updateUser = {
    id: $("#idLog").val(),
    first_name: $("#adminFirstName").val(),
    last_name: $("#adminLastName").val(),
    email: $("#adminEmail").val(),
    role: $("#adminRole").val(),
    hours: $("#adminHours").val(),
    tutor_id: $("#adminTutorID").val()
  }
  $.ajax({
    method: "PUT",
    url: "/api/update_user/",
    data: updateUser
  }).then(setTimeout(function(){window.location.reload();},100));
});
$(document).on("click",".userDelete", function(){
  console.log("click");
  var id = $(this).data( "id" );
  console.log(id);
  $.ajax({
    method: "DELETE",
    url: "/api/delete_user_by_id/" + JSON.stringify(id),
  }).then(setTimeout(function(){window.location.reload();},100));
});