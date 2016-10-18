"use strict";

module.exports = function(sequelize, DataTypes) {
	const Assignment = sequelize.define('Assignment', {
		Title: DataTypes.STRING,
		Instructions: DataTypes.STRING,
		Due: DataTypes.DATEONLY,
		Resources: DataTypes.STRING //Should this be a string?  Arrays are only available with postgres.  We could effectively store an array via a string
	}, {
	classMethods: {
		associate: function(models) {

			Assignment.belongsTo(models.Section)
			Assignment.belongsToMany(models.User, {as: "AssignmentId", through: "UserAssignment"});
			
		}
	}
});
return Assignment;
};