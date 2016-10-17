//This file is just scratch sheet for populating a test DB with associations



//==============

var models = require ("../models");

// let { User, Section } = models;

var firstSection;
var firstSectionUsers = [];

models.Section.findOne({
	where: {
		id: 1
	}
}).then(function(section){
	firstSection = section;
});

for (var i = 51;  i <= 58; i++){

	models.User.findOne({
		where:{
			id: i
		}
	}).then(function(results){
		firstSectionUsers.push(results)
	})

};

console.log("firstSectionUsers: ", firstSectionUsers);

firstSection.setUsers(firstSectionUsers).then(function(){console.log("done!")})

//=====================

var secondSection;
var secondSectionUsers = [];

models.Section.findOne({
	where: {
		id: 2
	}
}).then(function(section){
	secondSection = section;
});


for (var i = 59;  i <= 67; i++){

	models.User.findOne({
		where:{
			id: i
		}
	}).then(function(results){
		secondSectionUsers.push(results)
	})
};

secondSection.setUsers(secondSectionUsers).then(function(){console.log("done!")})




/*
models.User.findAll({
	where:{
		id: {
			$between: [50, 58]
		}
	}
}).then(function(results){
	console.log(results);
})
*/
