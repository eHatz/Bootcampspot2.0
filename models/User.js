'use strict';
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		FirstName: DataTypes.STRING,
		LastName: DataTypes.STRING,
		Email: DataTypes.STRING,
		Role: DataTypes.STRING,//Can be "admin", "teacher", or "student"
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here
			User.belongsToMany(models.Section, {through: "UserSection"});
			User.belongsToMany(models.Session, {as: "Attendee", through: "Attendance"});
			User.belongsToMany(models.Assignment, {as: "SubmittingStudent", through: "UserAssignment"})
			User.hasOne(models.Career);
		}
	}
});
return User;
};