// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package


const Sequelize = require("sequelize");


const sequelize = new Sequelize("starwars", "root", "root", {
  host:"localhost",
  port: 8889,
  dialext: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})


// Exporting our connection
module.exports = sequelize;
