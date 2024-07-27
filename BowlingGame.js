class BowlingGame {
    constructor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let score = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
        if (this.isStrike(rollIndex)) {
            if (rollIndex + 2 >= this.rolls.length) break;
            score += 10 + this.strikeBonus(rollIndex);
            rollIndex += 1;
        } else if (this.isSpare(rollIndex)) {
            if (rollIndex + 2 >= this.rolls.length) break;
            score += 10 + this.spareBonus(rollIndex);
            rollIndex += 2;
        } else {
            if (rollIndex + 1 >= this.rolls.length) break;
            score += this.sumOfBallsInFrame(rollIndex);
            rollIndex += 2;
        }
        }

        return score;
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }

    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }

    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }

    sumOfBallsInFrame(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = BowlingGame;
} else {
    window.BowlingGame = BowlingGame;
}
