$( document ).ready(function() {
  console.log("ready");
    $('#submit').click(function(){
      $('.search').addClass("searchUp")
      $('.movie-title').addClass("searchSize")
    })
});
