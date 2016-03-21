/* DO NOT MODIFY THE CODE BETWEEN HERE... */

var myGame = new NotPacmanGame();

setup = function () {
  myGame.initialize();

};

draw = function() {
  myGame.update();
  myGame.display();
};

mouseClicked = function () {
  myGame.startup(mouseX, mouseY);
};
