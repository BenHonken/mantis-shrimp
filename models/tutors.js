module.exports = function(sequelize, DataTypes) {
  var Tutor = sequelize.define("Tutor", {
    user_id: DataTypes.INTEGER,
    hours: DataTypes.DECIMAL(10,2)
  });
  return Tutor;
};
