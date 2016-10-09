"use strict";

module.exports = function(sequelize, DataTypes) {
	const Assignment = sequelize.define('Assignment', {
		Instructions: DataTypes.STRING,
		Due: DataTypes.DATEONLY,
		Resources: DataTypes.STRING //Should this be a string?  Array in only available with postgres.  We could effectively store an array via a string
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here

			Assignment.belongsTo(Section)
			Assignment.belongsToMany(Users, {through: "Submission"});
			
		}
	}
});
return Assignment;
};