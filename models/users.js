var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        role: { type: DataTypes.STRING, allowNull: false, defaultValue: "student" },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        hours: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        tutor_id: DataTypes.INTEGER
    });
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    Users.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    })
    Users.addHook("beforeUpdate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    })
    return Users
}