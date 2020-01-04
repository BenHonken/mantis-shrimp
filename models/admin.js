module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define("Admin", {
    user_id: DataTypes.INTEGER,
  });
  return Admin;
};
