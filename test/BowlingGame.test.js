const chai = require('chai');
const expect = chai.expect;
const BowlingGame = require('../BowlingGame');

let dataProvider = [
    {
        rolls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        score: 0,
        description: 'should score a game with no rolls correctly'
    }, {
        rolls: [1,2,3,4,5,4,3,2,1,0,0,1,2,3,4,5,4,3,2,1],
        score: 50,
        description: 'should score a game with no strikes or spares correctly'
    }, {
        rolls: [9,1,5,5,7,2,10,10,10,2,3,6,4,7,3,3],
        score: 143,
        description: 'should score a game with spares correctly'
    }, {
        rolls: [10,10,10,10,10,10,10,10,10,10,10,10],
        score: 300,
        description: 'should score a perfect game correctly'
    }, {
        rolls: [10,7,3,7,2,9,1,10,10,10,2,3,6,4,7,3,3],
        score: 168,
        description: 'should score a game with mixed strikes, spares, and open frames correctly'
    }, {
        rolls: [10,10,10],
        score: 30,
        description: 'should handle incomplete games ending in a strike correctly'
    }, {
        rolls: [10,10,10,0,0,0],
        score: 60,
        description: 'should handle incomplete games correctly'
    }
];

describe('BowlingGame', () => {
    dataProvider.forEach(gameData => {
        it(gameData.description, () => {
            const game = new BowlingGame();
            gameData.rolls.forEach(pins => game.roll(pins));
            expect(game.score()).to.equal(gameData.score);
        });
    });
});
