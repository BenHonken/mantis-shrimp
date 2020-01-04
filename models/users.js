module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
  student: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
  tutor: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
  admin: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
  email: {type: DataTypes.STRING, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  first_name: {type: DataTypes.STRING, allowNull: false},
  last_name: {type: DataTypes.STRING, allowNull: false},
});
return Users
}