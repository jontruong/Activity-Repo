const data = require('./bands');

for (const property in data.bands) {
   console.log(`my favorite ${property} is ${data.bands[property]}`);
    
}

