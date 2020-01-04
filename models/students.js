module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    user_id: DataTypes.INTEGER,
    hours: DataTypes.DECIMAL(10,2),
    tutor_id: DataTypes.INTEGER
  });
  return Student;
};
