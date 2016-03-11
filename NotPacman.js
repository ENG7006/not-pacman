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

var timer = new Timer();
timer.pause();

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

var otherBalls = [];

var ballIndex = 20;


var NotPacmanGame = function () {
};

NotPacmanGame.prototype = {

  initialize: function () {
    createCanvas(600, 600);
    this.keyedUpBall = new KeyedUpBall(190, 300);
    this.keyedUpBall.initialize();
    while (otherBalls.length < ballIndex) otherBalls.push(new BouncyBall(width/2, height/2));
    otherBalls.forEach(this.initializeOtherBall);
    this.gameInPlay = 0;
  },

  update: function () {
    this.keyedUpBall.update();
    otherBalls.forEach(this.checkBallForDeletion, this);
    if (otherBalls.length === 0) timer.pause();  },

  display: function () {
    this.preGame();
    if (this.gameInPlay) this.playGame();
  },

  preGame: function() {
    background(0);
    fill(255)
    textSize(35);
    text(timer.getPrettyElapsedTime(), 20, 40);
    counter.display();
  },

  playGame: function() {
    if (otherBalls.length > 0) this.keyedUpBall.display();
    otherBalls.forEach(this.updateAndDisplayOtherBall);
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

  startGame: function() {
    this.gameInPlay = 1;
    timer.unpause();
  }
};
