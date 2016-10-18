'use strict';
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("UserAssignment", {
		UserId: DataTypes.INTEGER,
		AssignmentId: DataTypes.INTEGER,
		Submission: DataTypes.STRING,
		Notes: DataTypes.TEXT,
	}, {
	classMethods: {
		associate: function(models) {

		}
	}
});
return User;
};