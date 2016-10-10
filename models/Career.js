"use strict";

module.exports = function(sequelize, DataTypes) {
	const Career = sequelize.define('Career', {
		//add properties
	}, {
	classMethods: {
		associate: function(models) {

			Career.belongsTo(User);

		}
	}
});
return Career;
};