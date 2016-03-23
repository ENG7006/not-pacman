/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/
var timer = new Timer();
timer.pause();

var counter = {
  number: 0,

  display: function () {
    fill(255);
    text(this.number, 250, 525);
  },
  update: function () {
    this.addNumber();
  },
  addNumber: function () {
    counter.number = counter.number + 1;
  },
};

var otherBalls = [];

var ballPit = 20;

// constructor function
var NotPacmanGame = function () {

};

NotPacmanGame.prototype = {
  counter: {
    number: 0,
    display: function () {
      fill(255);
      text(this.number, 250, 525);
    },
    update: function () {
      this.addNumber();
    },
    addNumber: function () {
      this.number = this.number + 1;
    },
  },

  initialize: function () {
    createCanvas(600, 600);
    while(otherBalls.length < ballPit) otherBalls.push(new BouncyBall(width/2, height/2));
    otherBalls.forEach(this.initializeOtherBall);
    this.gameInPlay = false;
  },

  update: function () {
    if (this.gameInPlay) {
      this.keyedUpBall.update();
      otherBalls.forEach(this.checkForBallDelete, this);
    }
    if (otherBalls.length === 0) this.endGame();
  },

  display: function () {
    background(100);
    fill(255);
    text(timer.getPrettyElapsedTime(), 20, 40);
    this.counter.display();
    if (this.gameInPlay) this.keepPlaying();
  },

  keepPlaying: function() {
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
  checkForBallDelete: function(otherBall, ballPit, array) {
    if (this.keyedUpBall.detectCollision(otherBall)) this.deleteBallAt(ballPit);
  },
  deleteBallAt: function(ballPit) {
    otherBalls.splice(ballPit, 1);
    this.counter.addNumber();
  },
  startGame: function() {
    timer.unpause();
    if (!this.keyedUpBall) {
      this.keyedUpBall = new KeyedUpBall(mouseX, mouseY);
      this.keyedUpBall.initialize();
    }
    this.gameInPlay = true;
  },
  endGame: function() {
    this.gameInPlay = false;
    timer.pause();

  }
};
