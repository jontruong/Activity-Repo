// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "Q9dPCN00WeWSMfHAlWBNOzBborF80HKb"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);



// Take in the command line arguments
var place = process.argv.slice(2).join(" ");



// Build your address as an array or string
const geocodeInfo = async function(place){
try{
const res = await geocoder.geocode(place);
console.log(JSON.stringify(res,null,2));
}catch(e){
console.log(e);
}
}

geocodeInfo(place);
// Then use the geocoder object to search the address
