"use strict";

module.exports = function(sequelize, DataTypes) {
	const Announcement = sequelize.define('Announcement', {
		Title: DataTypes.STRING,
		Content: DataTypes.STRING,
		Date: DataTypes.DATE
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here

			Announcement.belongsTo(Section)

		}
	}
});
return Announcement;
};