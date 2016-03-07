/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/
var detectCollision = function(otherball) {
  var ballDistance = dist(this.position.x, this.position.y, otherBall.position.x, otherBall.position.y);
  var radii = otherBall.radius + this.radius;
  if (balldistance <= radii) return true;
  else return false;
  };

var timer = new Timer();

var counter = {
  number: 0,

  display: function () {
    textSize(35);
    text(this.number, 20, 580);
  },

  addCount: function () {
    counter.number = counter.number + 1;
  }
};

var otherBall = [];

var ballIndex = 20;

var keyedUpBall = new KeyedUpBall(190, 300);

var NotPacmanGame = function () {
};

NotPacmanGame.prototype = {

  initialize: function () {
    createCanvas(600, 600);
    keyedUpBall.initialize();
    while (otherBall.length < ballIndex) otherBall.push(new BouncyBall(width/2, height/2));
    otherBall.forEach(this.initializeOtherBall);

  },

  update: function () {

  },

  display: function () {
    background(0);
    keyedUpBall.update();
    keyedUpBall.display();
    otherBall.forEach(this.updateAndDisplayOtherBall);
    textSize(35);
    text(timer.getPrettyElapsedTime(), 20, 40);
    counter.display();
  },

  initializeOtherBall: function (otherBall) {
    otherBall.initialize();
  },

  updateAndDisplayOtherBall: function(ball) {
    ball.update();
    ball.display();
  },

/*
  //need to call this!
  checkBallForDeletion: function(otherBall, ballIndex) {
  	if (detectCollision(otherBall)) deleteBallAt(ballIndex)
  },
*/

  };


deleteBallAt = function () {
    otherBall.splice(ballIndex, 1);

  var currentOtherBall = new p5.Vector(x, y); // get a Vector for the current mouse position

  // this is the basic looping version; it's not very robust, and may well lead to a rare bug.
  // can you see it? it has to do with what happens to the ball immediately after the deleted ball in the array
  for (var index = 0; index < otherBall.length; ++index) { // loop through the array
    if (otherBall[index].detectCollision(currentOtherBall)) { // test if the mouse is in the current ball
      otherBall.splice(index, 1); // if it is, then splice the ball out
    }}};
/*
  initializeDeleteBall: function (ball) {
	  ball.initialize();
  },

  updateAndDisplayDeleteBall: function (ball) {
	  ball.update();
  	ball.display();
  },
*/
