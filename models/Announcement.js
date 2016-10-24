"use strict";

module.exports = function(sequelize, DataTypes) {
	const Announcement = sequelize.define("Announcement", {
		Title: DataTypes.STRING,
		Content: DataTypes.TEXT
	}, {
	classMethods: {
		associate: function(models) {
			Announcement.belongsTo(models.Section)
		}
	}
});
return Announcement;
};