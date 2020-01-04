module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define("Cart", {
    user_id: DataTypes.INTEGER,
    product_1: DataTypes.INTEGER,
    product_2: DataTypes.INTEGER,
    product_3: DataTypes.INTEGER,
    product_4: DataTypes.INTEGER,
  });
  return Cart;
};
