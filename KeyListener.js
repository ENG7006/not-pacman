/*
  KEY LISTENER
  An only somewhat robust object that listens to a particular key on the keyboard and calls a function
  when it's pressed, specific to p5.js.

  This is the first bit of support code that we will use that is actually extensible and reusable.

  See remarks on key mapping at the bottom.

  GENERAL USE:
  A keyListener is used to make managing user interaction via keyboard easier.
  If an object that is supposed to respond to keyboard presses, you can make a series of key listeners in that object,
  telling them which functions to call on that object.
  That way, if you want to map movements to typical WASD controls,
  you create four listeners inside the object, one for W, A, S, and D, each calling a relevant
  moveUp(), moveLeft() (etc.) function.

  SPECIFIC USE:
  Create a new KeyListener, passing it the key you want to listen to,
  and the function you want called when the key is pressed,
  and then call listen() on your keyListener in draw() (or equivalent).
  When the key in question is pressed, the keyListener will call the function once for each time draw() is called.

  Possible pitfalls: there are two likely candidates if you press a key and nothing seems to happen.
  * If your console is full of errors, that means either (a) you didn't pass the proper listenOn object
  in the constructor, or (b) the function the listener calls itself contains an error. Inspect the stack trace.

  * If your console has no errors nor even keypress messages (if you haven't disabled console keypress reporting),
  and doesn't seem to respond to keypresses, then you're not calling listen() in draw() (or equivalent).
*/

/*
  KeyListener constructor:

  Takes 3 arguments:
  key: The key to listen to as a string, e.g. 'A'. Use capital letters.
  For keys that are not letter keys, ee below for exceptions and instructions.
  _function: The function to call when the key is pressed (i.e., a callback).
  listenOn: The object to which _function belongs, if the function makes any reference to the object it belongs to,
  using the this keyword. Optional.
*/
var KeyListener = function(key, _function, listenOn) {
  this.keyToListen = key.charCodeAt(0);
  //
  console.log("Created listener on " + key + ", code: " + this.keyToListen);
  this.functionToCall = _function;
  this.listenOn = listenOn;
};

KeyListener.prototype = {

  // KeyListener.listen() should be called in draw(), or in something that is invoked by draw().
  // If the function call throws an error, it's reported out to the console, but it doesn't interrupt the program or the object.
  // The most likely source of error here is failing to specify the listenOn object when it's necessary.
  listen: function() {
    if (keyIsDown(this.keyToListen)) {
      console.log("Key pressed: " + String.fromCharCode(this.keyToListen) + ": " + this.keyToListen); // sends the keypress to the console; comment this out if you wish.
      try {
        this.functionToCall.call(this.listenOn);
      } catch (e) {
        console.log("Function call failed. Most likely, you need an object to listen on.");
        console.error(e);
      }
    }

  }

};

/*
  Special variables for special keys.

  For keys that don't easily have a string attached to them (arrow keys, enter, etc.)
  use this special object and its special properties.
  p5 has related variables, but for reasons of scope, these have to be defined here.
  This is not an exhaustive list. Please note that p5 is a bit idiosyncratic in how it handles key mapping.
*/
var keyListenerMap = {

  leftArrow: String.fromCharCode(37),

  upArrow: String.fromCharCode(38),

  rightArrow: String.fromCharCode(39),

  downArrow: String.fromCharCode(40),

  enter: String.fromCharCode(13), //restart game?

  backspace: String.fromCharCode(8), //pause and unpause?

};
