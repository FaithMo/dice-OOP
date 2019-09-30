//let DiceFactory = require("./diceFactory"); // uncoment this before unit testing files singularly without jasmine

class Die {
    constructor(sides,prob){
        this.sides = sides;

        if(arguments.length == 2){
            this.prob=arguments[1];

        var sum = 0;
        for(let i =0; i<this.prob.length; i++){

            sum += this.prob[i];

            if(this.prob[i] < 0){
                throw ("negative probabilities not allowed");
            }

            if(isNaN(prob[i]) == true) {
                throw ("only integer values allowed");
            } 
        }
    }

        if(sum < 1){
            throw ("probability sum must be greater than 0");
        }

    }
    
    setProbabilities(prob){
        this.prob = prob;
    }

    roll(){

        if(this.sides >= 1){ //side should be an integer greater than 1.
            return Math.round(Math.random() * this.sides) + 1;
        }
        console.log(value);
    }
 
}


let die6 = new Die(3, [1,2,3,4,5,6]);
console.log(die6);

