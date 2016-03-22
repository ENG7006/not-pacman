// constructor function
var NotPacmanGame = function () {
  this.gameTime = new GameTimer();
  this.ballCount = new GameCounter();
  this.balls = new GameBalls();
};

NotPacmanGame.prototype = {
  isInPlay: 0,

  initialize: function () {
    createCanvas(800, 600);
  },

  // This function is called by sketch.js when the mouse is clicked.
  // The x,y coordinates are supplied by the mouseX and mouseY properties.
  startup: function (x, y) {
    // We want to prevent a user clicking the mouse and having that interpreted
    // as the start of the game when a game is already in progress.
    if (this.isInPlay)
      return;

    this.balls.initialize(20);

    this.gameBall =  new KeyedUpBall(x, y);
    this.gameBall.initialize();

    this.gameTime.restart();
    this.ballCount.reset();

    this.isInPlay = 1;
  },

  update: function () {
    // Because the update and display functions can be invoked before the user clicks the
    // mouse (official start of the game) we need to ensure that the code in this function
    // does not execute until the game is actually in play.
    if (!this.isInPlay)
      return;

      this.balls.update();
      for (var index = 0; index < this.balls.getCount(); index++) {
        if (this.gameBall.detectCollision(this.balls.getBall(index)))
          this.destroyBall(index);
      }

    this.gameBall.update();
  },

  destroyBall: function(index) {
    this.ballCount.increment();
    this.balls.delete(index);

    if (this.balls.getCount() == 0)
    {
      this.gameTime.pause();
      this.isInPlay = 0;
    }
  },

  display: function () {
    background('#151515');

    textSize(32);
    fill('#D71818');
    text('Balls Destroyed: ' + this.ballCount.getCount(), 15, 590);
    text('Game Time: ' + this.gameTime.getTime(), 490, 590);

    if (!this.isInPlay)
      return;

    this.balls.display();
    this.gameBall.display();
  }
};
