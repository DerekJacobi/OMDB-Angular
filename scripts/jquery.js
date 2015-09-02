$( document ).ready(function() {
  console.log("JS Loaded");
  // Function to change size of search bar
  var onSearch = function(){
    $('.search').addClass("searchUp")
    $('.movie-title').addClass("searchSize")
  }

  // run function onSearch when submit is clicked
  $('#submit').click(function(){
    onSearch();
  })

  // run function onSearch when enter is hit
  $(".movie-title").keyup(function(ev) {
   if (ev.which === 13 ) {
     onSearch()
    }
   })

   // run function onSearch when movie is clicked
   $('#movieList').click(function(){
     onSearch();
   })

});
