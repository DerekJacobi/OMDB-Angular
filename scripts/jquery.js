$( document ).ready(function() {
  console.log("JS Loaded");

  var onSearch = function(){
    $('.search').addClass("searchUp")
    $('.movie-title').addClass("searchSize")
  }

  $('#submit').click(function(){
    onSearch();
  })

  $(".movie-title").keyup(function(ev) {
   if (ev.which === 13 ) {
     onSearch()
    }
   })

});
