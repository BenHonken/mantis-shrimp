module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    hours: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  });
  return Products;
};
