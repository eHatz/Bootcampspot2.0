'use strict';
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		FirstName: DataTypes.STRING,
		LastName: DataTypes.STRING,
		Email: DataTypes.STRING,
		Role: DataTypes.STRING//Can be "Admin", "Teacher", or "Student"
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here
			User.belongsToMany(models.Assignment, {through: "UserAssignment"});
			User.belongsToMany(models.Section, {through: "UserSection"});
			User.belongsToMany(models.Session, {through: "Attendance"});
			User.hasOne(models.Career);
		}
	}
});
return User;
};