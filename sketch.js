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
mouseClicked = function () {

  // optional code goes here

};
