// Constructor function for creating CastMember objects
var Students = function(name, subject, GPA) {
    this.subject = subject;
    this.name = name;
    this.GPA = GPA;
  
    // Prints out slightly different information about a cast member based on their gender
    this.readProfile = function() {
     console.log(``)
  
      console.log(this.name + "'s favorite sibject is " + this.subject + "and their GPA: " + this.GPA );
    };
  };
  
  // Exporting our CastMember constructor. We will require it in movie.js
  module.exports = Students;