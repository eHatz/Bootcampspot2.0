//Keep these imports in place
const models = require ("../models");
const sequelize = require ("sequelize");

//Add sources of seeder data here

const seedUser = require ("./herokuSeedUser");




function seedIt(modelName, seeder){
  seeder.forEach(function(seeder){
    models[modelName].create(seeder)
  })
  console.log("Seeding " + modelName + " complete")
}
    
//Call seeders here using this format: seedIt("ModelName", seedData);
seedIt("User", seedUser);


module.exports=seedIt;