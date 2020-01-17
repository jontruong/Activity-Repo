// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get('/api/chirps', function(req,res) {
    res.json(chirps);
    });

  // Add a chirp
  app.post('/api/new_chirps', function(req,res){
    
  }


};
