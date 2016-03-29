/*
  BOUNCY BALL
  BouncyBall is similar to our other balls, but has two additional features: it uses p5.Vector objects to represent its position and speed, and it can tell when it's collided with another ball.

  GENERAL USE:
  Like InteractiveBall, this is less a reusable object and more an object-lesson. These bounce around a canvas.

  Notable features: (1) it can initialize on a particular vector (which describes its direction, although not its speed), or it gives itself a random direction. (2) it can tell when it collides with another ball (read: an object that's a circle that has a position.x, a position.y, and a radius; this is nominally another BouncyBall, but it could be an InteractiveBall).

  SPECIFIC USE:
  Create BouncyBalls with an x and y position, as well as a speed. The external-facing functions are:
  * The constructor, which takes x, y, and (optionally) speed
  * initialize(), which takes optional x and y arguments that describe the direction of its movement
  * update() and display(), which update state and display the shape, respectively
  * checkForCollision(), which takes another ball as an argument, and returns true if the two balls have collided
*/

// The constructor takes an x, y, and an optional speed
var BouncyBall = function(x, y, speed) {
  this.position = new p5.Vector(x, y); // position is represented by a p5.Vector object
  this.speed = (speed) ? speed: 2; // default speed is 2
};

BouncyBall.prototype = {

  radius: 10,

  // initialize() takes optional x and y that describe a direction; otherwise, the direction is random
  // the x and y describe direction, not speed, which is represented interally by the speed property
  initialize: function(x, y) {
    this.direction = (x && y) ? this.getNormalizedDirectionVector(x, y, this.speed) : this.getRandomDirectionVector(this.speed);
  },

  // update() calls bounce() and then simply adds the direction to the position
  update: function() {
    this.bounce();
    this.position.add(this.direction);
  },

  // display() draws a circle
  display: function() {
    noStroke();
    fill(255, 247, 0, 128);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

  // getNormalizedDirectionVector() returns a p5.Vector object whose direction is described by [x, y], but is scaled by the speed property
  getNormalizedDirectionVector: function(x, y, magnitude) {
    var vector = new p5.Vector(x, y);
    vector.normalize();
    vector.mult(magnitude);
    return vector;
  },

  // getRandomDirectionVector() returns a vector in a random direction with the magnitude specified
  getRandomDirectionVector: function(magnitude) {
    var vector = new p5.Vector(magnitude, 0);
    vector.rotate(random(0, TWO_PI));
    return vector;
  },

  // bounce() checks for horizontal and vertical bounces against edges, and bounces if need be
  bounce: function() {
    if (this.checkBounce(this.position.x, width, this.radius)) this.direction.x *= -1;
    if (this.checkBounce(this.position.y, height, this.radius)) this.direction.y *= -1;
  },

  // checkBounce() is a generalized version of the logic used for horizontal and vertical bounces
  checkBounce: function(position, limit, size) {
    return (position < size || position > limit - size);
  }

};
