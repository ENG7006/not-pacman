/* DO NOT MODIFY THE CODE BETWEEN HERE... */

var myGame = new NotPacmanGame();

setup = function () {

  myGame.initialize();

};

draw = function() {

  myGame.update();
  myGame.display();

};

/* ... AND HERE

  That said, you may wish to define a mouseClicked() function, which will be called automatically by p5 whenever the mouse is clicked.
*/
//if the mouse is over the canvas, play the game on click
mouseClicked = function () {
  //myGame.gameInPlay = true;// better to define a new function like start game
  myGame.startGame();
};

  // optional code goes here
