"use strict";

module.exports = function(sequelize, DataTypes) {
	const Session = sequelize.define('Session', {
		Subject: DataTypes.STRING,
		LessonNumber: DataTypes.DECIMAL,
		Date: DataTypes.DATEONLY,
		Recording: DataTypes.STRING,
		Resources: DataTypes.STRING //Should this be a string?  Array in only available with postgres.  We could effectively store an array via a string
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here

			Session.belongsToMany(Users, {through: "Attendance"});

		}
	}
});
return Session;
};