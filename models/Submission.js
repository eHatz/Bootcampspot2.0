"use strict";

module.exports = function(sequelize, DataTypes) {
	const Submission = sequelize.define('Submission', {
		Submission: DataTypes.STRING,
		Notes: DataTypes.TEXT,
		Grade: DataTypes.STRING,
		Status: DataTypes.STRING
	}, {
	classMethods: {
		associate: function(models) {

		}
	}
});
return Submission;
};