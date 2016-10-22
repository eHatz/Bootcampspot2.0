app.post("/attendance/singleSession", function(req, res){
	const sessionId = req.body.sessionId;
	var responseArray = [];

	//Grab all Attendance instances that match the current class session
	Attendance.findAll({where:{SessionId:sessionId}})
		.then((attendanceResults) =>
			//For each Attendance instance...
			attendanceResults.forEach((attendanceInstance)=>
				//...grab the associated user's name
				User.findOne({where:{id:attendanceInstance.UserId}})
					.then((user)=>
						//And package all this information in a tidy object
						responseArray.push({
							UserId: attendanceInstance.UserId,
							Name: user.FirstName + " " + user.LastName,
							Date: attendanceInstance.Date,
							Time: attendanceInstance.Time,
							Status: attendanceInstance.Status
						})
					)
			//end forEach		
			)
			return responseArray
		).then((responseArray)=> res.send(responseArray))
}
















































//==========

[
{"id":1,
"Title":"The Illest Section",
"Location":"CCC",
"Slack":"bootcampspot2.slack.com",
"StartDate":"2016-10-16T00:00:00.000Z","EndDate":"2017-03-10T00:00:00.000Z","createdAt":"2016-10-18T19:34:05.000Z","updatedAt":"2016-10-18T19:34:05.000Z","Users":[{"id":3,"FirstName":"Nat","LastName":"LaPier","Email":"nathaniel.lapier@gmail.com","Role":"Teacher","createdAt":"2016-10-18T19:34:05.000Z","updatedAt":"2016-10-18T19:34:05.000Z","UserSection":{"createdAt":"2016-10-21T22:48:11.000Z","updatedAt":"2016-10-21T22:48:11.000Z","SectionId":1,"UserId":3}}]}
]


var resultsVar;


User.findAll({
	where:{id:natId},
	include: [{
		model: Session,
		through:{where:{UserId: natId}},
		attributes: ["createdAt"]
	}]
}).then(function(results){
	resultsVar = results
})



//==========
User.findAll({
	where:{
		id:natId
	},
	include: [{
		model: Session,
		through:{
			attributes: ["updatedAt"]
		}
	}]
}).then(function(results){
	resultsVar = results
})