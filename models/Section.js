"use strict";

module.exports = function(sequelize, DataTypes) {
	const Section = sequelize.define('Section', {
		Title: DataTypes.STRING,
		Location: DataTypes.STRING,
		StartDate: DataTypes.DATEONLY,
		EndDate: DataTypes.DATEONLY
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here

			Section.hasMany(Session, {as: "SessionOfSection"});
			// Section.belongsToMany(User, {through: "UserSection"}


		}
	}
});
return Section;
};