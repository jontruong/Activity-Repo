const fs = require('fs');
const axios = require('axios');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
      axios.request(URL).then(function(response){
        var showData = response.data;
        let show = [`Name of the show: ${showData.name}\n Genre: ${showData.genres}\n Average Rating: ${showData.rating.average}\n Network Name: ${showData.network.name}\n Summary: ${showData.summary}`]
      fs.appendFile("log.txt",'utf8', data, function(err){
        if(err) throw err;
        console.log(data);
      });
});

module.exports = TV;
