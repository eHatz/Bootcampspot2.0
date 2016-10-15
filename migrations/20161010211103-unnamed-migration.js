'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users', [
      {
        FirstName: "J",
        LastName: "Dogg",
        Email: DataTypes.STRING,
        Role: DataTypes.STRING
      },
    ]
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