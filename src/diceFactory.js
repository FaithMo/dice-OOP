//let Dice = require("./dice"); //uncoment this before unit testing files singularly without jasmine

class DiceFactory {
    constructor(sides){
        this.sides = sides;
    }
    makeDie(){

        this.probabilities = [];
        for(var i = 0; i < this.sides; i++) {
            this.probabilities.push(parseInt(1));
        }
        return this.sides;
    }
}

var createDice = new DiceFactory(20);
console.log(createDice.makeDie());
