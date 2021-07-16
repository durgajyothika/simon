var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];
var started=false;
var level=0;
var i=0;
var j=0;
$(document).keypress(function() {
  if (started===false) {
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1)
});
function checkAnswer(currentLevel) {
if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 600);
}}
else{
  playSound("wrong");
  $("body").addClass("game-over");
 setTimeout(function(){
   $("body").removeClass("game-over");},200);
   $("#level-title").text("Game Over, Press Any Key to Restart ");
   startOver();
 }
}
function startOver() {
level=0;
gamePattern=[];
started=false;
}
function nextSequence() {
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);

var randomNumber=Math.floor((Math.random()*4));
var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


function playSound(name) {
    var audio =new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(cname) {
  $("#"+cname).addClass("pressed");

setTimeout(function(){
  $("#"+cname).removeClass("pressed");}, 100);
}
