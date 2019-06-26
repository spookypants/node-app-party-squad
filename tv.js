var axios = require("axios");
var fs = require("fs");
 
function output(info){
    console.log(info);

    fs.appendFile("log.txt", info, function(err){
    console.log(err);
    })
}

var TV = function() {
    this.findShow = function(show){
        var URL = "https://api.tvmaze.com/singlesearch/shows?q=" + show;
    
    axios.get(URL).then(function(response){
        output(`
        Show Name: ${response.data.name}
        Genres: ${response.data.genres.join(" ")}
        Network: ${response.data.network.name}
        Summary: ${response.data.summary}
        ------------------------------------
        `);
    })
    }
    this.findActor = function(actor){
        var URL = "https://api.tvmaze.com/search/people?q=" + actor;
    
    axios.get(URL).then(function(response){
        // console.log(response.data);
        output(`
        Name: ${response.data[0].person.name}
        Birthday: ${response.data[0].person.birthday}
        Gender: ${response.data[0].person.gender}
        Country: ${response.data[0].person.country.name}
        URL: ${response.data[0].person.url}
        `)
        })
    }
}

module.exports = TV;