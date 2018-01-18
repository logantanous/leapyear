//fbackend
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


//front end
$(document).ready(function() {
  $( "button" ).click(function() {
    var year = parseInt($("input").val());
    var result = leapYear(year);
    $("body").append(result);
  });
});
