//This file is just scratch sheet for populating a test DB with associations



//==============

var models = require ("../models");
var Attendance = models.Attendance;
var Session = models.Session
var User = models.User

// let { User, Section } = models;

//================
// Assign users to section 1


var firstSection;
var firstSectionUsers = [];

models.Section.findOne({
	where: {
		id: 1
	}
}).then(function(section){
	firstSection = section;
});

//Set i limits to reflect user IDs in current DB
for (var i = 5;  i <= 13; i++){

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
// Assign users to section 2

var secondSection;
var secondSectionUsers = [];

models.Section.findOne({
	where: {
		id: 2
	}
}).then(function(section){
	secondSection = section;
});

//Set i limits to reflect user IDs in current DB
for (var i = 14;  i <= 22; i++){

	models.User.findOne({
		where:{
			id: i
		}
	}).then(function(results){
		secondSectionUsers.push(results)
	})
};

secondSection.setUsers(secondSectionUsers).then(function(){console.log("done!")})

/*/================
//Assign user to sessions for attendance - first section

var firstSectionSessions = []

models.Session.findAll({
	where: {
		SectionId: 1
	}
}).then(function(results){
	firstSectionSessions = results;
})

for (var i = 0; i < firstSectionSessions.length; i++){
	firstSectionSessions[i].setUsers(firstSectionUsers)
	.then(function(results){
		console.log("set!");
	})
}

//================
//Assign user to sessions for attendance - second section

var secondSectionSessions = []

models.Session.findAll({
	where: {
		SectionId: 2
	}
}).then(function(results){
	secondSectionSessions = results;
})

for (var i = 0; i < secondSectionSessions.length; i++){
	secondSectionSessions[i].setUsers(secondSectionUsers)
	.then(function(results){
		console.log("set!");
	})
}
	
//========Change an individual user's role
var user1;

 models.User.findOne({
 	where:{
 		id:3
 	}
 }).then(function(user){
 	user1 = user
 })

 models.Section.findOne({
 	where:{
 		id:1
 	}
 }).then(function(section){
 	section.addUsers(user1)
 })


*///========



function seedAttendance(){
	User.findAll({where:{Role != "Admin"}})
		.then(function(users){
			users.forEach(function(user){
				var userId = user.id;
				user.getSections().then(function(section){
					return Session.findAll({where:{SectionId: section.id}})
					}).then(function(sessions){
						sessions.forEach(function(session){
							Attendance.create({
								SessionId: session.id,
								UserId: userId
							})
						})
					})
			})////////
		})
}


//console.log("++++++SECTIONID:" section.id);
/*


results.setUsers(firstSectionUsers)
}).then(function(a){
		console.log("done!");
})



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
