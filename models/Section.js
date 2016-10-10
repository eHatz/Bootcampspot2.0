"use strict";

module.exports = function(sequelize, DataTypes) {
	const Section = sequelize.define('Section', {
		Title: DataTypes.STRING,
		Location: DataTypes.STRING,
		Slack: DataTypes.STRING,
		StartDate: DataTypes.DATEONLY,
		EndDate: DataTypes.DATEONLY
	}, {
		classMethods: {
			associate: function(models) {

				Section.hasMany(models.Session)
				Section.hasMany(models.Assignment)
				Section.hasMany(models.Announcement)
				Section.belongsToMany(models.User, {as: "Class", through: "UserSection"});

			}
		}
	});

return Section;
};