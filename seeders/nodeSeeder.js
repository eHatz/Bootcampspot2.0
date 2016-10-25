//Keep these imports in place
const models = require ("../models");
const sequelize = require ("sequelize");

//Add sources of seeder data here
const seedSection = require ("./seedSection");
const seedUser = require ("./seedUser");
const seedSessions = require ("./seedSessions");
const seedAttendance = require ("./seedAttendance");



function seedIt(modelName, seeder){
  seeder.forEach(function(seeder){
    models[modelName].create(seeder)
  })
  console.log("Seeding " + modelName + " complete")
}
    
//Call seeders here using this format: seedIt("ModelName", seedData);
// seedIt("Section", seedSection);
seedIt("User", seedUser);
// seedIt("Session", seedSessions);
// seedIt("Attendance", seedAttendance);

module.exports=seedIt;