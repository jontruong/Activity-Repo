
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzwUEMq5JBgzE0a7gJiTiUa3LXw2RCtJs",
    authDomain: "timesheet-c3679.firebaseapp.com",
    databaseURL: "https://timesheet-c3679.firebaseio.com",
    projectId: "timesheet-c3679",
    storageBucket: "timesheet-c3679.appspot.com",
    messagingSenderId: "130263059539",
    appId: "1:130263059539:web:48b201eeac8bf209a84aa6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var name='';
  var role='';
  var date='';
  var rate='';


  $('#submit').on("click" , function(){
    event.preventDefault();

    
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    date = $("#date-input").val().trim();
    rate = $("#rate-input").val().trim();

    database.ref().push({
        name,
        role,
        date,
        rate,

      });
  })

  database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().date);
    console.log(snapshot.val().rate);


    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  dataRef.ref().on("child_added", function(childSnapshot){
      console.log(childSnapshot.val().name);
  })