/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/
var ballPit = [];

var ballAmount = 20;

this.timer = new Timer();
timer.pause();

var score = {
  number: 0,

  display: function () {
    textSize(40);
    fill(230);
    text(this.number, 560, 40);
  },

  update: function () {
  },

  scorePlus: function () {
    this.number++;
  },
};

// constructor function
var NotPacmanGame = function () {

};

  NotPacmanGame.prototype = {

    initialize: function () {
      createCanvas(600, 600);
      while (ballPit.length < ballAmount) ballPit.push(new BouncyBall(width/2, height/2));
      ballPit.forEach(this.ballStart);
      this.gameIsThere = false;
    },

    update: function () {
      //if (this.keyedUpBall) this.keyedUpBall.update();

      if (ballPit.length === 0) this.endGame();
    },

    display: function () {
      this.gameSetUp();
      if (this.gameIsThere) this.gameRun();
    },

    updateanddisplay: function (otherBall, index, array) {
      otherBall.update();
      otherBall.display();
    },

    gameSetUp: function () {
      background(0);
      fill(230);
      textSize(40);
      text(timer.getPrettyElapsedTime(), 40, 40);
      score.display();
    },

    gameRun: function () {
      if (ballPit.length > 0) {
        this.keyedUpBall.update();
        this.keyedUpBall.display();
      }
      ballPit.forEach(this.updateanddisplay);
      ballPit.forEach(this.checkForSplice, this);
    },

    beginGame: function (x, y) {
      this.gameIsThere = true;
      timer.unpause();
      this.keyedUpBall = new KeyedUpBall(x, y);
      this.keyedUpBall.initialize();
    },

    ballStart: function (otherBall, index, array) {
      otherBall.initialize();
    },

    checkForSplice: function (otherBall, ballAmount, array) {
      if (this.keyedUpBall.detectCollision(otherBall)) this.spliceBalls(ballAmount);
    },

    spliceBalls : function (ballAmount) {
      ballPit.splice(ballAmount, 1);
      score.scorePlus();
    },

    endGame : function () {
      this.gameIsThere = 0;
      timer.pause();
      fill(230);
      textSize(50);
      text("Hooray!", 300, 300);
    },


  };
