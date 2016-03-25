/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/
var bouncyBalls = [];
// constructor function
var NotPacmanGame = function () {
  this.gamePlayTime = new Timer();
  this.gamePlayTime.pause();

};

NotPacmanGame.prototype = {
  ballCounter: 0,
  gameBall: 0,
  gameInPlay: false,

  startUp: function(x, y){
    if(this.gameInPlay) return;
    this.gameBall = new KeyedUpBall(x, y);
    this.gameBall.initialize();
    //this.gamePlayTime.restart();
    this.destroyedBallCount = 0;
    this.gameInPlay = 1;
    //this.gamePlayTime.restart();
    for (var index = 0; index < 20; index ++) {
    bouncyBalls.push(new BouncyBall(width / 2, height / 2));
    bouncyBalls[index].initialize();
    this.gamePlayTime.unpause();
    }
  },

  initialize: function () {
    createCanvas(600, 600);


  },

  update: function () {
    for(var index = 0; index < bouncyBalls.length; index++) {
      bouncyBalls[index].update();
      if(this.gameBall && this.gameBall.detectCollision(bouncyBalls[index])){
        bouncyBalls.splice(index, 1);
        this.ballCounter ++;
        if (!this.gameInPlay)
          return;
      }
    }
      if(this.gameBall)
        this.gameBall.update();
      if(bouncyBalls.length == 0) this.gamePlayTime.pause();

  },

  display: function () {
    background(100);
    for(var index = 0; index < bouncyBalls.length; index++){
      bouncyBalls[index].display();
    }
    if(bouncyBalls.length > 0)
      this.gameBall.display();
    textSize(25);
    fill("white");
    text(this.ballCounter, 60, 60);
    text('Time: ' + this.gamePlayTime.getPrettyElapsedTime(), 450, 60);
  }

};
