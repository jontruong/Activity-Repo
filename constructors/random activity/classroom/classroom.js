// Requiring our CastMember constructor function we exported from castMember.js
var students = require("./students");

// Constructor function for creating Movie objects
var Classroom = function(classSize, professor, roomNumber) {
  // this.cast will hold all of our CastMember objects
  this.students = [];
  this.classSize = classSize;
  this.professor = professor;
  this.roomNumber = roomNumber;

  // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
  this.addStudent = function(subject, name, GPA) {
    this.cast.push(new Students(subject, name, GPA));
  };
};

// Exporting the Movie constructor which we will use in main.js
module.exports = Classroom;