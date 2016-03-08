/*
Having trouble getting detectCollision to work ( put on this page or keyedUpBall?) ...
which seems to prevent checkBallForDeletion from working ...
which seems to prevent deleteBallAt from working ...

deleteBallAt code -- think it's fine, want to double check --
*/
/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/

// -- The timer needs to be linked to the operation of the balls -- pause/unpause
// -- How can this freeze the balls in play? It needs to pause the draw/display function.
// -- This needs to be reset at 0 whne the enter key is hit
var timer = new Timer();

var mousePressed = function() {};



// -- This needs to be reset at 0 when the enter key is hit
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

// -- This needs to be reset at initial value when enter key is hit
var otherBalls = [];

var ballIndex = 1;

/* -- KeyedUpBall needs to be reset at initial value when enter key is hit
   -- This needs to stop when delete is pressed once, start again when delete is pressed again ...
   -- ... Use an if statement: if enter is pressed when not-paused, pause, ...
   -- ... followed by another if statement ...
   -- ... if enter is pressed when paused, resume.
*/

var NotPacmanGame = function () {
};

NotPacmanGame.prototype = {


  initialize: function () {
    createCanvas(600, 600);
    textSize(35);
    text(timer.getPrettyElapsedTime(), 20, 40); //once all of the balls are gone, this and counter changes to KeyedUpBall color
    counter.display();
    mouseClicked() {
      if (counter.display()) {
      this.keyedUpBall = new KeyedUpBall(190, 300);
      this.keyedUpBall.initialize();
      while (otherBalls.length < ballIndex) otherBalls.push(new BouncyBall(width/2, height/2));
      otherBalls.forEach(this.initializeOtherBall);
    }};

  },

  update: function () {
    this.keyedUpBall.update(); //error here keyed up ball is undefined -- this line does not have access to keyedupball in startGame
    otherBalls.forEach(this.checkBallForDeletion, this);
    if (otherBalls.length === 0) timer.pause();

  },

  display: function () {
    background(0);
    if (otherBalls.length > 0) this.keyedUpBall.display();
    otherBalls.forEach(this.updateAndDisplayOtherBall);
    textSize(35);
    text(timer.getPrettyElapsedTime(), 20, 40); //once all of the balls are gone, this and counter changes to KeyedUpBall color
    counter.display();
  },

  initializeOtherBall: function (otherBall, index, array) {
    otherBall.initialize();
  },

  updateAndDisplayOtherBall: function(ball, index, array) {
    ball.update();
    ball.display();
  },

  checkBallForDeletion: function(otherBall, ballIndex, array) {
  	if (this.keyedUpBall.detectCollision(otherBall)) this.deleteBallAt(ballIndex);

  },

  deleteBallAt: function(ballIndex) {
    otherBalls.splice(ballIndex, 1);
    counter.addCount();

  },


//things I need to do:
//--start with blank screen and HUD at 0:00 and 0
//--mouse click begins game using mouseClicked()


};




  //to stop the timer, will I need a for loop?

/* ??-- Alternte deleteBallAt code?
// ??-- this should be in object literal, right?


    }
*/






/* ??-- Are these necessary to kickstart the process of deletion?
   ????????-- Not sure when initialize/update/display are required, conceptual roadblock here.

  initializeDeleteBall: function (ball) {
	  ball.initialize();
  },

  updateAndDisplayDeleteBall: function (ball) {
	  ball.update();
  	ball.display();
  },
*/
