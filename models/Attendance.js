"use strict";
module.exports = function(sequelize, DataTypes){
	
	const Attendance = sequelize.define("Attendance", {
		Status: DataTypes.STRING,
		Date: DataTypes.DATEONLY,
		Time: DataTypes.TIME,
		Status: DataTypes.STRING,
		Notes:DataTypes.STRING
	},{
		freezeTableName: true,
		tableName: "Attendance"
	},{
		classMethods:{
			associate: function(models){
				Attendance.belongsTo(models.Session);
				Attendance.belongsTo(models.User);
			}
		}
	});
return Attendance;
};






