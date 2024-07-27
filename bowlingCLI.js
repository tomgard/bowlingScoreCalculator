const BowlingGame = require('./BowlingGame');

const rolls = process.argv.slice(2).map(Number);

if (rolls.some(isNaN)) {
    console.error("Invalid input: all arguments should be numbers representing the pins knocked down.");
    process.exit(1);
}

try {
    const game = new BowlingGame();
    rolls.forEach(pins => game.roll(pins));
    console.log("Score:", game.score());
} catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
}
