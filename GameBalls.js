var GameBalls = function () {
  this.balls = [];
};

GameBalls.prototype = {
  initialize: function (numBalls) {
    for (var index = 0; index < numBalls; index++) {
      this.balls.push(new BouncyBall(width / 2, height / 2));
      this.balls[index].initialize();
    };
  },

  update: function() {
    for (var index = 0; index < this.getCount(); index++) {
      this.balls[index].update();
    };
  },

  display: function() {
    for (var index = 0; index < this.getCount(); index++) {
      this.balls[index].display();
    };
  },

  delete: function(index) {
    this.balls.splice(index, 1);
  },

  getBall: function(index) {
    return this.balls[index];
  },  

  getCount: function() {
    return this.balls.length;
  }
};
