$(document).ready(function () {
  $('form').on('submit', function(event){
    event.preventDefault();
    $.post('https://mighty-eyrie-15280.herokuapp.com/films', data())
  })
  function data (){
    return {
      ghjjhg: jgjhg

    }
  }
})
