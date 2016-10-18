'use strict';
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("UserAssignment", {
		UserId: DataTypes.INTEGER,
		AssignmentId: DataTypes.INTEGER,
		Submission: DataTypes.STRING,
	}, {
	classMethods: {
		associate: function(models) {

		}
	}
});
return User;
};