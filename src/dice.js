//let DiceFactory = require("./diceFactory"); // uncoment this before unit testing files singularly without jasmine
//module.exports = Die;
class Die {
    constructor(sides,prob){
        this.sides = sides;
        this.prob = prob;
        this.value = 0;

        if(arguments.length == 2){
            this.prob = arguments[1];
            this.error();
        }
    }
    error(){

        var sum = 0;
        if(this.sides != this.prob.length){
            throw new Error("The length of array is not equal to the sides");
        }
        
        for(let i =0; i<this.prob.length; i++){

            
            if(this.prob[i] < 0){
                throw ("negative probabilities not allowed");
            }
            sum += this.prob[i];

        }

        if(sum <=0 ){
            throw new Error("probability sum must be greater than 0");
        }
    }

    roll(){
        //fair die
        if(this.sides >= 1){ //side should be an integer greater than 1.
            return Math.floor(Math.random() * this.sides + 1);
        }
    }
    
    setProbabilities(prob){
        this.prob = prob;
        for (var i = 0; i < prob.length; i++) {
            if(Number.isInteger(prob[i]) === false) {
                throw new Error("only integer values allowed");
            }else{
                this.error();
            }
            this.update();
        }
    }

    update(){
        let arr = [];
        for(var j = 1; j <= this.sides; j++){
            for(let x=0; x<this.prob[j -1]; j++){
                arr.push(j);
            }
        }
        this.value = arr[this.roll()];
    }
 
}


let die6 = new Die(3);
console.log(die6.roll());
// die6.setProbabilities([1,1,1]);
// die6.update();

