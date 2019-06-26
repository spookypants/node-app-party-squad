var TV = require("./tv");

var tv = new TV();


var search = process.argv[2]
var subject = process.argv.slice(3).join(' ');

if (!search) {
    search = "show";
}

if (!subject) {
    subject = "Sesame Street"; 
}

if (search === "show") {
    console.log("Searching for TV Show");
    tv.findShow(subject);
} else {
    console.log("Search for TV Actor");
    tv.findActor(subject);
}


// function TV (choice){

//     findshow();
// }

// function findshow(results){
//     if(choice=== 'actor'){
//         search = 'people'
//     } else if (choice === 'shows'){
//         search = 'shows';
//     }
//    $.ajax({
//        url: "http://api.tvmaze.com/search/" + search + "?q=" + subject,
//          dataType: 'json',
//          success: function(data){
//              var year = data.Year;
//              var subject = $( this ).text();
//              $(title).append(" ("+year+")");

//          }
//      });
//      console.log(results);
// }

// function findActor (){
//     if(choice == 'Actor'){



//    console.log(
//        `Name: ${subject}
//        n/Birthday: ${}
//        n/Gender: ${}
//        n/Country: ${}`
//    )

// } else if (choice == 'Show'){

// }

// }