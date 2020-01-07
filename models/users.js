module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
  role: {type: DataTypes.STRING, allowNull: false, defaultValue: "student"},
  email: {type: DataTypes.STRING, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  first_name: {type: DataTypes.STRING, allowNull: false},
  last_name: {type: DataTypes.STRING, allowNull: false},
});
return Users
}