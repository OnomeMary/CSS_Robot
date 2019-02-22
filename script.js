//When eyes button is clicked, toggle laser class
$('.flash').click(function() {
    $('.brain').toggleClass('laser');
    });

//When color button is clicked, pick a number 0-255
$(".color").click(function() {
 // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  
  //Generate an RGBA value from red, green, and blue
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';

// AND CHANGE THE BODY'S BACKGROUND TO OUR RANDOM COLOR
$("body").css("background", randomRGBA);

  //Display the three values in an alert window
//  alert(red + "," + green + "," + blue);
 alert(randomRGBA);
});


$(".moves").click(function() {
  $("img").toggle();
  });
