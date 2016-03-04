/*
  NOT PACMAN GAME
  This is the object where you should write just about all your code for this assignment.

*/
var bouncyBalls = [];
// constructor function
var NotPacmanGame = function () {

};

NotPacmanGame.prototype = {

  initialize: function () {
    createCanvas(800,600);
    for (var index = 0; index < 20; index++) {
      bouncyBalls[index] = new BouncyBall(width/2, height/2);
      bouncyBalls[index].initialize();
    }

  },

  update: function () {
    for (var index = 0; index < bouncyBalls.length; index++) {
      bouncyBalls[index].update();
    }

  },

  display: function () {
    background (100);
    for (var index = 0; index < bouncyBalls.length; index++) {
      bouncyBalls[index].display();
    }
  }

};
