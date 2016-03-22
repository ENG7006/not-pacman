var GameTimer = function () {
  this.gamePlayTime = new Timer();
}

GameTimer.prototype = {
  getTime: function() {
    return this.gamePlayTime.getPrettyElapsedTime();
  },

  restart: function() {
    this.gamePlayTime.restart();
  },

  pause: function() {
    this.gamePlayTime.pause();
  }
}
