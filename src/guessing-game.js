class GuessingGame {
    constructor() {
        this.generatedNumber;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
       this.generatedNumber = Math.ceil((this.max - this.min)/2)+this.min;
       return this.generatedNumber;
    }

    lower() {
        this.max=this.generatedNumber;
    }

    greater() {
        this.min=this.generatedNumber;

    }
}

module.exports = GuessingGame;
