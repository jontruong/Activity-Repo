var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var Character = sequelize.define("allcharacters", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER,
});

// Syncs with DB
Character.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Character;