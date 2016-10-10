'use strict';
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		FirstName: DataTypes.STRING,
		LastName: DataTypes.STRING,
		UserName: DataTypes.STRING,
		Email: DataTypes.STRING,
		Role: DataTypes.STRING,//Can be "admin", "teacher", or "student"
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here
			User.belongsToMany(Section, {as: "Member", through: "UserSection"});
			User.belongsToMany(Session, {as: "Attendee", through: "Attendance"});
			User.hasMany(Assignment, {as: "SubmittingStudent", through: "UserAssignment"})
			User.hasOne(Career);
		}
	}
});
return User;
};