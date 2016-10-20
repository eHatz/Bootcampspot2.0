'use strict';
module.exports = function(sequelize, DataTypes) {
	const UserAssignment = sequelize.define("UserAssignment", {
		Submission: DataTypes.STRING,
		Notes: DataTypes.TEXT,
		Grade: DataTypes.STRING,
	}, {
	classMethods: {
		associate: function(models) {

		}
	}
});
return UserAssignment;
};