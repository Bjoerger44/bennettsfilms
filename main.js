$(document).ready(function (){
  console.log("Sanity check")
  $('form').on('submit', function(event){
    event.preventDefault();
    var movieName = $('#moviesearch').val();
    $.get('https://galvanize-cors-proxy.herokuapp.com/https://api.themoviedb.org/3/search/movie/?api_key=69d2ced7c1460e81b5b6e63b73efe5f2&query=' + movieName,function(data) {
        var results = data.results
        for (var i = 0; i < results.length; i++){
          $('.shit').html('<p>'+ results[i].overview + '</p>')
        }
  })
})


});
