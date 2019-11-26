//let Die = require("./dice"); //uncoment this before unit testing files singularly without jasmine

class DiceFactory {

    constructor(dice) {
        this.dice = new Die(dice);
        if (arguments.length == 2) {
          this.dice = new Die(dice, arguments[1]);
        }
      }
    
    makeDie(){

        return this.dice;
        //return this.sides;
    }
}


