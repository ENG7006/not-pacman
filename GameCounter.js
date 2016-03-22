var GameCounter = function () {
  this.destroyedBallCount = 0;
};

GameCounter.prototype = {
  increment: function() {
    this.destroyedBallCount ++;
  },

  getCount: function() {
    return this.destroyedBallCount;
  },

  reset: function () {
    this.destroyedBallCount = 0;
  }
};
