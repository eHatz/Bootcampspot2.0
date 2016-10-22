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
				//User.belongsToMany(models.Assignment, {through: "UserAssignment"});
				User.hasMany(models.Submission);
				User.belongsToMany(models.Section, {through: "UserSection"});
				User.hasMany(models.Attendance);
				User.hasOne(models.Career);
			}
		}
	});
return User;
};