module.exports = function(sequelize, DataTypes) {
  var Logs = sequelize.define("Logs", {
  tutor_user_id: {type: DataTypes.INTEGER, allowNull: false},
  tutor_name: {type: DataTypes.STRING, allowNull: false},
  student_user_id: {type: DataTypes.INTEGER, allowNull: false},
  student_name: {type: DataTypes.STRING, allowNull: false},
  date: {type: DataTypes.DATE, allowNull: false},
  duration: {type: DataTypes.DECIMAL(10,2), allowNull: false}
});
return Logs
}