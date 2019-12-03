// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDORkRQ9VAYdy0xEswXZIeMcqB6Z5jQ2kM",
    authDomain: "click-counter-3850a.firebaseapp.com",
    databaseURL: "https://click-counter-3850a.firebaseio.com",
    projectId: "click-counter-3850a",
    storageBucket: "click-counter-3850a.appspot.com",
    messagingSenderId: "125238494824",
    appId: "1:125238494824:web:00e9b441133e26086f1ddd",
    measurementId: "G-K4T1CXXC6W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


// Assign the reference to the database to a variable named 'database'
// var database = ...
var database =firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice= snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;

    // Change the HTML to reflect the stored values
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);


    // Print the data to the console.
    console.log(highPrice);
    console.log(highBidder);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {
    database.ref().set({
      highPrice:initialBid,
      highBidder:initialBidder
    });
    // highBidder = snapshot.val().highBidder;
    // highPrice = snapshot.val().highPrice;
    // Change the HTML to reflect the initial values
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);

    // Print the data to the console.
    console.log(initialBid);
    console.log(initialBidder);


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
var bidderName = $('#bidder-name').val().trim();
var bidderPrice = parseInt($('#bidder-price').val().trim());

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highPrice: bidderPrice,
      highBidder: bidderName,
    });
    console.log("New High Price");
    console.log(bidderName);
    console.log(bidderPrice);
    // Log the new High Price
  //  database.ref().on("value", function(snapshot){
  //    console.log(snapshot.val().bidderName);
  //    console.log(snapshot.val().bidderPrice);
  //  })

  //   // Store the new high price and bidder name as a local variable
  //  highBidder = $(snapshot.val().bidderName);
  //  highPrice = $(snapshot.val().bidderPrice)

  //   // Change the HTML to reflect the new high price and bidder
  //  $('#highest-bidder').text(highBidder);
  //  $('#highest-price').text(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
