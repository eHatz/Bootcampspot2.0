'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users', [
      {
        FirstName: "J",
        LastName: "Dogg",
        Email: "jdogg@nofilter.com",
        Role: "Student"
      },
      {
        FirstName: "Tim",
        LastName: "Hatztztz",
        Email: "tim@fullgreek.com",
        Role: "Student"
      },
      {
        FirstName: "Anda",
        LastName: "Sglrtgxbkrgy",
        Email: "anda@polish.com",
        Role: "Student"
      },
      {
        FirstName: "Emad",
        LastName: "K",
        Email: "emad@bigsneeze.com",
        Role: "Student"
      },
      {
        FirstName: "Eric",
        LastName: "Mok",
        Email: "e@m.com",
        Role: "Student"
      },
      {
        FirstName: "Elsa",
        LastName: "E",
        Email: "elsa@thepanamaconnection.com",
        Role: "Student"
      },
      {
        FirstName: "Peleg",
        LastName: "Rosenthal",
        Email: "peleg@brah.com",
        Role: "Student"
      },
      {
        FirstName: "Craig",
        LastName: "Raimey",
        Email: "craig@redbeard.com",
        Role: "Student"
      },
      {
        FirstName: "Theory",
        LastName: "Practice",
        Email: "theory@ohword.com",
        Role: "Student"
      },
{
        FirstName: "A",
        LastName: "B",
        Email: "a@b.com",
        Role: "Student"
      },
      {
        FirstName: "C",
        LastName: "D",
        Email: "C@D.com",
        Role: "Student"
      },
      {
        FirstName: "E",
        LastName: "F",
        Email: "E@F.com",
        Role: "Student"
      },
      {
        FirstName: "G",
        LastName: "H",
        Email: "G@H.com",
        Role: "Student"
      },
      {
        FirstName: "I",
        LastName: "J",
        Email: "I@J.com",
        Role: "Student"
      },
      {
        FirstName: "K",
        LastName: "L",
        Email: "K@L.com",
        Role: "Student"
      },
      {
        FirstName: "M",
        LastName: "N",
        Email: "M@N.com",
        Role: "Student"
      },
      {
        FirstName: "O",
        LastName: "P",
        Email: "O@P.com",
        Role: "Student"
      },
      {
        FirstName: "Q",
        LastName: "R",
        Email: "Q@R.com",
        Role: "Student"
      }
    ]);

    queryInterface.bulkInsert('Sections', [
      {
        Title: "The Illest Section",
        Location: "CCC",
        Slack: "bootcampspot2.slack.com",
        StartDate: 2016-10-16 12:45:34,
        EndDate: 2017-3-10 12:45:34
      },
      {
        Title: "The 'special' Section",
        Location: "Short bus",
        Slack: "bootcampspot2.slack.com",
        StartDate: 2016-9-16 12:45:34,
        EndDate: 2017-2-10 12:45:34
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};


/*
var User = sequelize.define("User", {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Role: DataTypes.STRING,
*/