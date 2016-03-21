// constructor function
var NotPacmanGame = function () {
  this.gamePlayTime = new Timer();
};

NotPacmanGame.prototype = {
  bouncyBalls: [],
  isInPlay: 0,

  initialize: function () {
    createCanvas(800, 600);
  },

  startup : function (x, y) {
    // We want to prevent a user clicking the mouse and having that interpreted
    // as the start of the game when a game is already in progress.
    if (this.isInPlay)
      return;

    for (var index = 0; index < 20; index++) {
      this.bouncyBalls.push(new BouncyBall(width / 2, height / 2));
      this.bouncyBalls[index].initialize();
    };

    this.gameBall =  new KeyedUpBall(x, y);
    this.gameBall.initialize();

    this.gamePlayTime.restart();
    this.destroyedBallCount = 0;
    this.isInPlay = 1;
  },

  update: function () {
    // Because the update and display fucntions can be invoked before the user clicks the
    // mouse (official start of the game) we need to ensure that the code in this functions
    // does not execute until the game is actually in play.
    if (!this.isInPlay)
      return;

    for (var index = 0; index < this.bouncyBalls.length; index++) {
      this.bouncyBalls[index].update();

      if (this.gameBall.detectCollision(this.bouncyBalls[index]))
        this.destroyBall(index);
    };

    this.gameBall.update();
  },

  destroyBall: function(index) {
    this.destroyedBallCount ++;

    this.bouncyBalls.splice(index, 1);
    if (this.bouncyBalls.length == 0)
    {
      this.gamePlayTime.pause();
      this.isInPlay = 0;
    }
  },

  display: function () {
    background(80);
    textSize(32);
    fill(255,0,0);
    text('Balls Destroyed: ' + this.destroyedBallCount, 15, 590);
    text('Game Time: ' + this.gamePlayTime.getPrettyElapsedTime(), 490, 590);

    if (!this.isInPlay)
      return;

    for (var index = 0; index < this.bouncyBalls.length; index++) {
      this.bouncyBalls[index].display();
    };

    this.gameBall.display();
  }
};
