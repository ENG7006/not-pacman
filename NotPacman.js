/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/
var bouncyBalls = [];

// constructor function
var NotPacmanGame = function () {
  this.playtime = new Timer();
  this.playtime.initialize();
  this.playtime.pause();
};

NotPacmanGame.prototype = {
  play:0,
  myMovingBall:0,
  counter:0,

  initialize: function () {
    createCanvas(800,600);


  },

  startUp: function (x,y) {
    for (var index = 0; index < 20; index++) {
      bouncyBalls[index] = new BouncyBall(width/2, height/2);
      bouncyBalls[index].initialize();
    }
    this.myMovingBall = new KeyedUpBall(x, y);
    this.myMovingBall.initialize();
    this.playtime.restart();
    this.play = 1;
  },

  update: function () {
    if(this.play==0)
      return;

    for (var index = 0; index < bouncyBalls.length; index++) {
      bouncyBalls[index].update();
      if(this.myMovingBall.detectCollision(bouncyBalls[index]))
      this.destroyBall(index);
    }
    this.myMovingBall.update();
  },

  destroyBall: function(index) {
    bouncyBalls.splice(index,1);
    this.counter+=1;
    if(bouncyBalls.length==0){
      this.playtime.pause();
      this.play=0
    }
  },

  display: function () {
    background (0);
    textSize(30);
    fill(255);
    text('Total Count:' +this.counter, 10, 50);
    text('Time Elapsed:'+this.playtime.getPrettyElapsedTime(),10, 500);
    if(this.play==0)
      return;
    for (var index = 0; index < bouncyBalls.length; index++) {
      bouncyBalls[index].display();
    }
    this.myMovingBall.display();
  }

};
