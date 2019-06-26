var choice = process.argv[2]
var search;

function grab (choice){

    if(choice=== 'actor'){
        search = 'people'
    } else if (choice === 'show'){
        search = 'show';
    }
   $.ajax({
       url: "http://api.tvmaze.com/search/" + search + "?q=" + $(choice).text(),
         dataType: 'json',
         success: function(data){
             var year = data.Year;
             var text = $( this ).text();
             $(title).append(" ("+year+")");

         }
     });
}

if(choice == 'Actor'){



   console.log(
       `Name: ${subject}
       n/Birthday: ${}
       n/Gender: ${}
       n/Country: ${}`
   )

} else if (choice == 'Show'){

}

var subject = process.argv.slice(3).join(' ');