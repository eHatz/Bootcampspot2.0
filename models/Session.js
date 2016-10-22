"use strict";

module.exports = function(sequelize, DataTypes) {
	const Session = sequelize.define('Session', {
		Subject: DataTypes.STRING,
		LessonNumber: DataTypes.DECIMAL,
		Date: DataTypes.DATEONLY,
		Time: DataTypes.TIME,
		Recording: DataTypes.STRING,
		Resources: DataTypes.STRING //Should this be a string?  Array in only available with postgres.  We could effectively store an array via a string
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
				Session.belongsTo(models.Section)
				Session.hasMany(models.Attendance);	
			}
		}
	});
return Session;
};