"use strict";
module.exports = function(sequelize, DataTypes){
	const Attendance = sequelize.define("Attendance" {
		Status: DataTypes.STRING,
		Date: DataTypes.DATEONLY,
		Time: DataTypes.TIME,
		Status: DataTypes.STRING,
		Notes:DataTypes.STRING
	}{
		freezeTableName: true,
		tableName: "Attendance"
	})
}





/*
"use strict";

module.exports = function(sequelize, DataTypes) {
	const Session = sequelize.define('Session', {
		Subject: DataTypes.STRING,
		LessonNumber: DataTypes.DECIMAL,
		Date: DataTypes.DATE,
		Recording: DataTypes.STRING,
		Resources: DataTypes.STRING //Should this be a string?  Array in only available with postgres.  We could effectively store an array via a string
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here
			Session.belongsTo(models.Section)
			Session.belongsToMany(models.User, {through: "Attendance"});
			
		}
	}
});
return Session;
};



'use strict';
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		FirstName: DataTypes.STRING,
		LastName: DataTypes.STRING,
		Email: DataTypes.STRING,
		Role: DataTypes.STRING//Can be "Admin", "Teacher", or "Student"
		// createdAt:{
		// 	defaultValue: Date.now
		// }
	}, {
	classMethods: {
		associate: function(models) {
			// associations can be defined here
			User.belongsToMany(models.Assignment, {through: "UserAssignment"});
			User.belongsToMany(models.Section, {through: "UserSection"});
			User.belongsToMany(models.Session, {through: "Attendance"});
			User.hasOne(models.Career);
		}
	}
});
return User;
};





*/