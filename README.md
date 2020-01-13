# Mantis Shrimp Tutoring Service

Contributors: Ben Honken, Bryan Iund, Jacob Rosenbaum, Kyle Betlach.

<img width="1198" alt="msts" src="https://user-images.githubusercontent.com/53587397/72225534-1be4fd80-354c-11ea-81fe-e4dbfb150262.png">

# Introduction

For project02, our task was to create a program / app / website that had the following functionality:

- Must use a Node and Express web server.
- Must be backed by a MySQL database with a Sequelize ORM.
- Must have both GET and POST routes for retrieving and adding new data.
- Must be deployed using Heroku (with data).
- Must utilize at least one new library, package, or technology that we haven't discussed.
- Must have a polished front end / UI.
- Must have a folder structure that meets the MCV paradigm.
- Must meet good-quality coding standards (indentation, scoping, naming, etc).
- Must protect API keys in Node with environment variables.

We decided on a concept based on Ben's real life tutoring website. Our application allows users to sign up as either a tutor or a student, and based on what they register as, they are routed to a unique page. Students have their tutoring hours displayed, as well as a link to the store where they can purchase more hours.

The tutors have a list of all of their students, and are able to create tutoring logs where they can record the date and duration of tutoring sessions. There is also an administrator page that lists all users of the application, with the ability to delete individual users. The administrator can also update invidivual user's information, like their name, email addresses, tutoring hours, etc.

Using GET and POST routes with delete and update buttons, this application hits all four aspects of CRUD (creating, reading, updating, deleting). 

# Launch

Heroku link: 

# Technologies

The program was created in VS Code using html, css, Bootstrap, JavaScript and jQuery. Standard MVC protocol was adhered to in folder and file structure.

Passport.js was used as the new technology not discussed thus far in class. This technology allows users to login and logout of the program.

MySQL was used as our database to store user information.

# Status

The program is at an "MVP status," meeting the requirements of the project. We do have several ideas for future development:

- Implement credit card authentication for hours purchasing.
- Ability for users to change passwords.
- Sorting tutor logs by various parameters (date, duration, student etc).
- Allowing students and tutors to communicate and set tutoring sessions through the program.
- Restrict profiles by role.
- Validation in the forms. i.e. Is your email actually an email address?

# Sources and Inspiration

Ben's real life tutoring website is the spiritual sibling of this project. He provided the idea, and since his proposed functionality hit all of the requisites of the project, we decided to run with it!