describe("Throwing a dice", () => {

    it("should show random numbers between 1 and sides of a dice.", () => {
        let myDie = new Die(6);
        let correctRange = false;
        let result = myDie.roll();
        if(result > 0 && result <=6){
            correctRange = true;
        }
        expect(correctRange).toBe(true);
    });

});

describe("Handle errors", () => {
    it("should check for negative propability", () => {
        let dieDodgy6 = new Die(6);
        try {dieDodgy6.setProbabilities([-1, 1, 1, 1, 1, 2]);
        }catch (e) {
          expect(e).toBeTruthy("negative probabilities not allowed");
        }
    });

      it("should check for probabilities greater than 0", () => {
        try {
          dieDodgy6.setProbabilities([0, 1, 1, 1, 1, 1]);
        }catch (e) {
          expect(e).toBeTruthy("probability sum must be greater than 0");
        }
    });

      it("should check for integer values", () => {
        try {dieDodgy6.setProbabilities([2.1, 1, 1, 1, 1, 1]);
         }catch (e) {
          expect(e).toBeTruthy("only integer values allowed");
        }
    });
})

describe("Dice factory", () => {
    it("should only make one kind of die", () => {
      let factory20 = new DiceFactory(20);
      let die20 = factory20.makeDice();
      let anotherDie = factory20.makeDice();
      expect(die20).toBe(anotherDie);
    });
});