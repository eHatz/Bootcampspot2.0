"use strict";

module.exports = function(sequelize, DataTypes) {
	const Career = sequelize.define('Career', {
		Linkedin: DataTypes.TEXT,
		Github: DataTypes.TEXT,
		StackOverflow: DataTypes.TEXT,
		Resume: DataTypes.TEXT,
		Portfolio: DataTypes.TEXT,
		Bio: DataTypes.TEXT
	}, {
	classMethods: {
		associate: function(models) {
			Career.belongsTo(models.User);
		}
	}
});
return Career;
};