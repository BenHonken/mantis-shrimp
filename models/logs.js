module.exports = function(sequelize, DataTypes) {
  var Logs = sequelize.define("Logs", {
  tutor: {type: DataTypes.STRING, allowNull: false},
  student: {type: DataTypes.STRING, allowNull: false},
  date: {type: DataTypes.DATE, allowNull: false},
  duration: {type: DataTypes.DECIMAL(10,2), allowNull: false}
});
return Logs
}